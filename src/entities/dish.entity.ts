import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Size } from './size.entity';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Size, (size) => size.dishes)
  size: Size
}