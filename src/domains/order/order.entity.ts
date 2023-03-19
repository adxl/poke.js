import { Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { Dish } from "../dish/dish.entity";
import { User } from "../user/user.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToMany(() => Dish)
  dishes: Dish[];
}
