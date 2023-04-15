import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { User } from "../../domains/users/users.entity";
import * as data from "./users.data.json";

export class BaseSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE user RESTART IDENTITY CASCADE"
    );
    const users = data.map((user) => {
      const newUser = new User();
      newUser.firstName = user.firstName;
      newUser.lastName = user.lastName;
      newUser.email = user.email;
      newUser.password = user.password;
      newUser.isAdmin = user.isAdmin;
      return newUser;
    });
    await dataSource.manager.save(users);
  }
}
