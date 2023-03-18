import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}