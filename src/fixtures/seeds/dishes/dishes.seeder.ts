import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Dish } from "../../../domains/dishes/dishes.entity";
import { data } from "./dishes.data";

export class DishSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.getRepository(Dish).save(data);
  }
}
