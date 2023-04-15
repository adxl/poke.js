import { DataSource } from "typeorm";
import { runSeeder, Seeder } from "typeorm-extension";
import { BaseSeeder } from "./bases/bases.seeder";
import { ProteinSeeder } from "./proteins/proteins.seeder";
import { SizeSeeder } from "./sizes/sizes.seeder";
import { ToppingSeeder } from "./toppings/toppings.seeder";

export class MainSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await runSeeder(dataSource, BaseSeeder);
    await runSeeder(dataSource, ProteinSeeder);
    await runSeeder(dataSource, SizeSeeder);
    await runSeeder(dataSource, ToppingSeeder);
  }
}
