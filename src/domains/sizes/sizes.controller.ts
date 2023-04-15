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
import { SizesService } from "./sizes.service";
import { Size } from "./sizes.entity";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UpdateSizeDto, InsertSizeDto } from "./sizes.dto";

@ApiBearerAuth()
@ApiTags("Sizes")
@Controller("sizes")
export class SizesController {
  constructor(private readonly sizeService: SizesService) {}

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
    return this.sizeService.findOne(id);
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
