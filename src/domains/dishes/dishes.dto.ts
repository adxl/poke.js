import { IsArray, IsOptional, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Base } from "../bases/bases.entity";
import { Size } from "../sizes/sizes.entity";

export class createDishDto {
  @ApiProperty({ example: "" })
  size: Size | string;

  @ApiProperty({ example: "" })
  base: Base | string;

  @ApiProperty({ example: [] })
  @IsArray()
  proteins: string[];

  @ApiProperty({ example: [] })
  @IsArray()
  toppings: string[];
}

export class updateDishDto {
  @ApiProperty({ example: "" })
  @IsOptional()
  @IsUUID()
  size: string;

  @ApiProperty({ example: "" })
  @IsOptional()
  @IsUUID()
  base: string;

  @ApiProperty({ example: [] })
  @IsOptional()
  @IsArray()
  proteins: string[];

  @ApiProperty({ example: [] })
  @IsOptional()
  @IsArray()
  toppings: string[];
}
