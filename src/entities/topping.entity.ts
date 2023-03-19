import { Entity, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { Dish } from './dish.entity';
  
@Entity()
export class Topping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  @Column('float')
  price: string;

  @Column()
  img: string;

  @ManyToMany(() => Dish)
  @JoinTable()
  dishes: Dish[]
}