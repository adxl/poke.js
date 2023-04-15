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
import { BasesService } from "./bases.service";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { Base } from "src/domains/bases/bases.entity";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { createBaseDto, updateBaseDto } from "./bases.dto";

@ApiTags("Bases")
@Controller("/bases")
@ApiBearerAuth()
export class BasesController {
  constructor(private readonly basesService: BasesService) {}

  @Get()
  @HttpCode(200)
  @Header("poke-app", "Base")
  getAll(): Promise<Base[]> {
    return this.basesService.findAll();
  }

  @Get(":id")
  @HttpCode(200)
  getOne(@Param("id") id: string): Promise<Base> {
    return this.basesService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  create(@Body() body: createBaseDto): Promise<Base> {
    return this.basesService.create(body);
  }

  @Patch(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  update(@Param("id") id: string, @Body() body: updateBaseDto): Promise<void> {
    return this.basesService.update(id, body);
  }

  @Delete(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  delete(@Param("id") id: string): Promise<void> {
    return this.basesService.remove(id);
  }
}
