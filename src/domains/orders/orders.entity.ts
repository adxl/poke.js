import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Dish } from "../dishes/dishes.entity";
import { User } from "../users/users.entity";

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
