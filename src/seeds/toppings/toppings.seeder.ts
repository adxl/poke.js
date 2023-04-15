import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Topping } from "../../domains/toppings/toppings.entity";
import * as data from "./toppings.data.json";

export class ToppingSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.manager.query(
      "TRUNCATE TABLE topping RESTART IDENTITY CASCADE"
    );
    const toppings = data.map((topping) => {
      const newTopping = new Topping();
      newTopping.name = topping.name;
      newTopping.price = topping.price;
      return newTopping;
    });
    await dataSource.manager.save(toppings);
  }
}
