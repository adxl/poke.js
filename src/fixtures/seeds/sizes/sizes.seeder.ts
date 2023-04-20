import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Size } from "../../../domains/sizes/sizes.entity";
import { data } from "./sizes.data";

export class SizeSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.getRepository(Size).save(data);
  }
}
