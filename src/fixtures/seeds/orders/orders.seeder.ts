import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Order } from "../../../domains/orders/orders.entity";
import { data } from "./orders.data";

export class OrderSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.getRepository(Order).save(data);
  }
}
