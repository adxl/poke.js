// size.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  Header,
  UseGuards,
} from "@nestjs/common";
import { SizeService } from "./size.service";
import { Size } from "./size.entity";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";
import { UpdateSizeDto, InsertSizeDto } from "./size.dto";

@ApiBearerAuth()
@Controller("/sizes")
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  create(@Body() size: InsertSizeDto): Promise<Size> {
    return this.sizeService.create(size);
  }

  @Get()
  @HttpCode(200)
  @Header("poke-app", "Size")
  findAll(): Promise<Size[]> {
    return this.sizeService.findAll();
  }

  @Get(":id")
  @HttpCode(200)
  findOne(@Param("id") id: string): Promise<Size | null> {
    return this.sizeService.getOneById(id);
  }

  @Patch(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  update(@Param("id") id: string, @Body() size: UpdateSizeDto): Promise<void> {
    return this.sizeService.update(id, size);
  }

  @Delete(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  remove(@Param("id") id: string): Promise<void> {
    return this.sizeService.remove(id);
  }
}
