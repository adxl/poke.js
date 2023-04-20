import { DataSource } from "typeorm";
import { runSeeder, Seeder } from "typeorm-extension";
import { BaseSeeder } from "./bases/bases.seeder";
import { ProteinSeeder } from "./proteins/proteins.seeder";
import { SizeSeeder } from "./sizes/sizes.seeder";
import { ToppingSeeder } from "./toppings/toppings.seeder";
import { UserSeeder } from "./users/users.seeder";
import { DishSeeder } from "./dishes/dishes.seeder";
import { OrderSeeder } from "./orders/orders.seeder";

export class MainSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.synchronize(true);

    await runSeeder(dataSource, UserSeeder);
    await runSeeder(dataSource, SizeSeeder);
    await runSeeder(dataSource, BaseSeeder);
    await runSeeder(dataSource, ProteinSeeder);
    await runSeeder(dataSource, ToppingSeeder);
    await runSeeder(dataSource, DishSeeder);
    await runSeeder(dataSource, OrderSeeder);
  }
}
