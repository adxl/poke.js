import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Size {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 25 })
  label: string;

  @Column("float")
  value: number;
}
