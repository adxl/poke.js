import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Order } from "../../domains/orders/orders.entity";
import * as data from "./orders.data.json";

export class BaseSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE order RESTART IDENTITY CASCADE"
    );

    dataSource.manager.getRepository(Order).save(data);
  }
}
