import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dish } from './dish.entity';
import { Protein } from './protein.entity';

@Entity()
export class DishHasProtein {
  @PrimaryGeneratedColumn()
  id: number;

}