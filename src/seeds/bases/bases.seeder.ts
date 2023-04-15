import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Base } from "../../domains/bases/bases.entity";
import * as data from "./bases.data.json";

export class BaseSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE base RESTART IDENTITY CASCADE"
    );

    dataSource.manager.getRepository(Base).save(data);
  }
}
