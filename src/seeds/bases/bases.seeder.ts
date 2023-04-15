import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Base } from "../../domains/bases/bases.entity";
import * as data from "./bases.data.json";

export class BaseSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE base RESTART IDENTITY CASCADE"
    );
    const bases = data.map((base) => {
      const newBase = new Base();
      newBase.name = base.name;
      newBase.price = base.price;
      return newBase;
    });
    await dataSource.manager.save(bases);
  }
}
