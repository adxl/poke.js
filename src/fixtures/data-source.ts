import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { MainSeeder } from "./seeds/main.seeder";
import { Base } from "../domains/bases/bases.entity";
import { Dish } from "../domains/dishes/dishes.entity";
import { Order } from "../domains/orders/orders.entity";
import { Protein } from "../domains/proteins/proteins.entity";
import { Size } from "../domains/sizes/sizes.entity";
import { Topping } from "../domains/toppings/toppings.entity";
import { User } from "../domains/users/users.entity";

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Base, Dish, Order, Protein, Size, Topping, User],
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(options);
