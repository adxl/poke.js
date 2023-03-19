import {
  Entity,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Size } from "../size/size.entity";
import { Protein } from "../protein/protein.entity";
import { Topping } from "../topping/topping.entity";
import { Base } from "../base/base.entity";

@Entity()
export class Dish {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Size, { eager: true })
  size: Size;

  @ManyToOne(() => Base, { eager: true })
  base: Base;

  @ManyToMany(() => Protein)
  @JoinTable()
  proteins: Protein[];

  @ManyToMany(() => Topping)
  @JoinTable()
  toppings: Topping[];
}

