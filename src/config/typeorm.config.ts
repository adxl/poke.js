import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Base } from "src/domains/bases/bases.entity";
import { Dish } from "src/domains/dishes/dishes.entity";
import { Order } from "src/domains/orders/orders.entity";
import { Protein } from "src/domains/proteins/proteins.entity";
import { Size } from "src/domains/sizes/size.entity";
import { Topping } from "src/domains/toppings/toppings.entity";
import { User } from "src/domains/users/users.entity";

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Base, Dish, Order, Protein, Size, Topping, User],
  synchronize: process.env.STAGE === "local",
};
