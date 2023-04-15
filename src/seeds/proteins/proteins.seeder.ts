import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Protein } from "../../domains/proteins/proteins.entity";
import * as data from "./proteins.data.json";

export class ProteinSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE protein RESTART IDENTITY CASCADE"
    );

    dataSource.manager.getRepository(Protein).save(data);
  }
}
