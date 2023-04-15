import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Base } from "../bases/bases.entity";
import { BasesService } from "../bases/bases.service";
import { Dish } from "../dishes/dishes.entity";
import { DishesService } from "../dishes/dishes.service";
import { Protein } from "../proteins/proteins.entity";
import { ProteinsService } from "../proteins/proteins.service";
import { Size } from "../sizes/sizes.entity";
import { SizesService } from "../sizes/sizes.service";
import { Topping } from "../toppings/toppings.entity";
import { ToppingsService } from "../toppings/toppings.service";
import { OrdersController } from "./orders.controller";
import { Order } from "./orders.entity";
import { OrdersService } from "./orders.service";

@Module({
  imports: [TypeOrmModule.forFeature([Order, Dish, Size, Base, Topping, Protein])],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    DishesService,
    SizesService,
    BasesService,
    ToppingsService,
    ProteinsService,
  ],
})
export class OrdersModule {}
