import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Protein {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 25 })
  name: string;

  @Column()
  price: number;

  @Column()
  image: string;
}

