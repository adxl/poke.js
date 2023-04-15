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
import { createToppingDto, updateToppingDto } from "./toppings.dto";
import { Topping } from "./toppings.entity";

@ApiTags("Toppings")
@Controller("/toppings")
@ApiBearerAuth()
export class ToppingsController {
  constructor(private readonly toppingsService: ToppingsService) {}

  @Get()
  @HttpCode(200)
  findAll(): Promise<Topping[]> {
    return this.toppingsService.getAll();
  }

  @Get(":id")
  @HttpCode(200)
  findOne(@Param("id") id: string): Promise<Topping> {
    return this.toppingsService.getOneById(id);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  public create(@Body() body: createToppingDto): Promise<Topping> {
    return this.toppingsService.create(body);
  }

  @Patch(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  update(
    @Param("id") id: string,
    @Body() topping: updateToppingDto
  ): Promise<void> {
    return this.toppingsService.update(id, topping);
  }

  @Delete(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  remove(@Param("id") id: string): Promise<void> {
    return this.toppingsService.remove(id);
  }
}
