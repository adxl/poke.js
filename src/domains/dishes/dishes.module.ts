import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Dish } from "./dishes.entity";
import { DishesController } from "./dishes.controller";
import { DishesService } from "./dishes.service";


@Module({
  imports: [TypeOrmModule.forFeature([Dish])],
  controllers: [DishesController],
  providers: [DishesService],
})
export class DishesModule {}