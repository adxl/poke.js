import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Dish } from "../dish/dish.entity";
import { User } from "../user/user.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany(() => Dish)
  @JoinTable()
  dishes: Dish[];
}
