import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Size } from "../../domains/sizes/sizes.entity";
import * as data from "./sizes.data.json";

export class SizeSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE size RESTART IDENTITY CASCADE"
    );

    dataSource.manager.getRepository(Size).save(data);
  }
}
