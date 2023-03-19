import { Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Size } from './size.entity';
import { Protein } from './protein.entity';
import { Topping } from './topping.entity';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Size, (size) => size.dishes)
  size: Size

  @ManyToMany(() => Protein)
  @JoinTable()
  proteins: Protein[]

  @ManyToMany(() => Topping)
  @JoinTable()
  toppings: Topping[]
}