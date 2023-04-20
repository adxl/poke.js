import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Protein } from "../../../domains/proteins/proteins.entity";
import { data } from "./proteins.data";

export class ProteinSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.getRepository(Protein).save(data);
  }
}
