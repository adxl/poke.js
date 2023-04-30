import { Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Size } from "../sizes/sizes.entity";
import { Protein } from "../proteins/proteins.entity";
import { Topping } from "../toppings/toppings.entity";
import { Base } from "../bases/bases.entity";

@Entity()
export class Dish {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Size, { eager: true, onDelete: "CASCADE" })
  size: Size;

  @ManyToOne(() => Base, { eager: true, onDelete: "CASCADE" })
  base: Base;

  @ManyToMany(() => Protein)
  @JoinTable()
  proteins: Protein[];

  @ManyToMany(() => Topping)
  @JoinTable()
  toppings: Topping[];
}
