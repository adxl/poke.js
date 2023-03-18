import { Entity, Column, OneToMany,PrimaryGeneratedColumn } from 'typeorm';
import { Dish } from './dish.entity';

@Entity()
export class Protein {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  @Column('float')
  price: string;

  @Column()
  img: string;

  @OneToMany(() => Dish, (dish) => dish.proteins)
  dishes: Dish[]
}