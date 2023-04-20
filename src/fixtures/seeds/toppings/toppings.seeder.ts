import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Topping } from "../../../domains/toppings/toppings.entity";
import { data } from "./toppings.data";

export class ToppingSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.getRepository(Topping).save(data);
  }
}
