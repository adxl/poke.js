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
import { ApiBearerAuth } from "@nestjs/swagger";
import { createBaseDto, updateBaseDto } from "./bases.dto";

@Controller("/bases")
@ApiBearerAuth()
export class BasesController {
  constructor(private readonly basesService: BasesService) {}

  @Get()
  @HttpCode(200)
  @Header("poke-app", "Base")
  getUsers() {
    return this.basesService.getAll();
  }

  @Get(":id")
  @HttpCode(200)
  findOne(@Param("id") id: string): Promise<Base> {
    return this.basesService.getOneById(id);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  public create(@Body() body: createBaseDto): Promise<Base> {
    return this.basesService.create(body);
  }

  @Patch(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  update(@Param("id") id: string, @Body() base: updateBaseDto): Promise<void> {
    return this.basesService.update(id, base);
  }

  @Delete(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  remove(@Param("id") id: string): Promise<void> {
    return this.basesService.remove(id);
  }
}
