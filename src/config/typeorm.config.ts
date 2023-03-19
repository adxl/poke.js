import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Base } from "src/domains/base/base.entity";
import { Dish } from "src/domains/dish/dish.entity";
import { Order } from "src/domains/order/order.entity";
import { Protein } from "src/domains/protein/protein.entity";
import { Size } from "src/domains/size/size.entity";
import { Topping } from "src/domains/topping/topping.entity";
import { User } from "src/domains/user/user.entity";

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Base, Dish, Order, Protein, Size, Topping, User],
  synchronize: process.env.STAGE === "local",
};

