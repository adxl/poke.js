import {
  Controller,
  Get,
  Delete,
  Param,
  HttpCode,
  Header,
  UseGuards,
} from "@nestjs/common";
import { DishesService } from "./dishes.service";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { Dish } from "./dishes.entity";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Dishes")
@Controller("/dishes")
@ApiBearerAuth()
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  @HttpCode(200)
  @Header("poke-app", "Base")
  getDishes(): Promise<Dish[]> {
    return this.dishesService.getAll();
  }

  @Get(":id")
  @HttpCode(200)
  findOne(@Param("id") id: string): Promise<Dish> {
    return this.dishesService.getOneById(id);
  }

  // @Post()
  // @HttpCode(201)
  // @UseGuards(JwTAuthGuard, RoleAdminGuard)
  // public create(@Body() body: createDishDto): Promise<Dish> {
  //   return this.dishesService.create(body);
  // }

  // @Patch(":id")
  // @UseGuards(JwTAuthGuard, RoleAdminGuard)
  // update(@Param("id") id: string, @Body() base: updateDishDto): Promise<void> {
  //   return this.dishesService.update(id, base);
  // }

  @Delete(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  remove(@Param("id") id: string): Promise<void> {
    return this.dishesService.remove(id);
  }
}
