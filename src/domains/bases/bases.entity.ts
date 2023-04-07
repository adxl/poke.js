import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ example: 'rise', description: 'Name of the Base' })
  @Column({ length: 25 })
  name: string;

  @ApiProperty({ example: '2.50', description: 'Price of the Base' })
  @Column()
  price: number;

}
