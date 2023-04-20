import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Base } from "../../../domains/bases/bases.entity";
import { data } from "./bases.data";

export class BaseSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.getRepository(Base).save(data);
  }
}
