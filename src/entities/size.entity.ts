import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dish } from './dish.entity';

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  label: string;

  @Column('float')
  value: string;

  @OneToMany(() => Dish, (dish) => dish.size)
  dishes: Dish[]
}