import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { User } from "../../domains/users/users.entity";
import * as data from "./users.data.json";

export class UserSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE user RESTART IDENTITY CASCADE"
    );

    dataSource.manager.getRepository(User).save(data);
  }
}
