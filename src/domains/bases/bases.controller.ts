import {
  Controller,
  Get,
  Post,
  Put,
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

@Controller("/bases")
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
  findOne(@Param("id") id: string): Promise<Base | null> {
    return this.basesService.getOneById(id);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  create(@Body() base: Base): Promise<Base> {
    return this.basesService.create(base);
  }

  @Put(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  update(@Param("id") id: string, @Body() base: Base): Promise<void> {
    return this.basesService.update(id, base);
  }

  @Delete(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  remove(@Param("id") id: string): Promise<void> {
    return this.basesService.remove(id);
  }
}
