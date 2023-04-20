import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { User } from "../../../domains/users/users.entity";
import { data } from "./users.data";

export class UserSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.getRepository(User).save(data);
  }
}
