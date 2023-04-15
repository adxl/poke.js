import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Dish } from "./dishes.entity";
import { DishesService } from "./dishes.service";
import { BasesService } from "../bases/bases.service";
import { SizesService } from "../sizes/sizes.service";
import { Base } from "../bases/bases.entity";
import { Size } from "../sizes/sizes.entity";
import { Topping } from "../toppings/toppings.entity";
import { Protein } from "../proteins/proteins.entity";
import { ToppingsService } from "../toppings/toppings.service";
import { ProteinsService } from "../proteins/proteins.service";

@Module({
  imports: [TypeOrmModule.forFeature([Dish, Base, Size, Topping, Protein])],
  controllers: [],
  providers: [DishesService, BasesService, SizesService, ToppingsService, ProteinsService],
})
export class DishesModule {}
