import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  UseGuards,
} from "@nestjs/common";
import { ToppingsService } from "./toppings.service";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateToppingDto, UpdateToppingDto } from "./toppings.dto";
import { Topping } from "./toppings.entity";
import { DeleteResult, UpdateResult } from "typeorm";

@ApiTags("Toppings")
@Controller("/toppings")
@ApiBearerAuth()
export class ToppingsController {
  constructor(private readonly toppingsService: ToppingsService) {}

  @Get()
  @HttpCode(200)
  getAll(): Promise<Topping[]> {
    return this.toppingsService.findAll();
  }

  @Get(":id")
  @HttpCode(200)
  getOne(@Param("id") id: string): Promise<Topping> {
    return this.toppingsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  create(@Body() body: CreateToppingDto): Promise<Topping> {
    return this.toppingsService.create(body);
  }

  @Patch(":id")
  @HttpCode(200)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  update(@Param("id") id: string, @Body() topping: UpdateToppingDto): Promise<UpdateResult> {
    return this.toppingsService.update(id, topping);
  }

  @Delete(":id")
  @HttpCode(204)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  delete(@Param("id") id: string): Promise<DeleteResult> {
    return this.toppingsService.remove(id);
  }
}
