import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Order } from "../orders/orders.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Exclude()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
