import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Topping } from "../../domains/toppings/toppings.entity";
import * as data from "./toppings.data.json";

export class ToppingSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE topping RESTART IDENTITY CASCADE"
    );

    dataSource.manager.getRepository(Topping).save(data);
  }
}
