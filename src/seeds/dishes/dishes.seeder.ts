import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Dish } from "../../domains/dishes/dishes.entity";
import * as data from "./dishes.data.json";

export class BaseSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE dish RESTART IDENTITY CASCADE"
    );

    dataSource.manager.getRepository(Dish).save(data);
  }
}
