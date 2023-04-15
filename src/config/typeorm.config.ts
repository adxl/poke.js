import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Base } from "../domains/bases/bases.entity";
import { Dish } from "../domains/dishes/dishes.entity";
import { Order } from "../domains/orders/orders.entity";
import { Protein } from "../domains/proteins/proteins.entity";
import { Size } from "../domains/sizes/sizes.entity";
import { Topping } from "../domains/toppings/toppings.entity";
import { User } from "../domains/users/users.entity";

const IS_LOCAL: boolean = process.env.STAGE === "local";

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Base, Dish, Order, Protein, Size, Topping, User],
  synchronize: IS_LOCAL,
  ssl: !IS_LOCAL,
  extra: IS_LOCAL
    ? {}
    : {
        ssl: {
          rejectUnauthorized: false,
        },
      },
};
