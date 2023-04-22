import { IsOptional, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDishDto {
  @ApiProperty({ example: "" })
  @IsUUID(4)
  size: string;

  @ApiProperty({ example: "" })
  @IsUUID(4)
  base: string;

  @ApiProperty({ example: [] })
  @IsUUID(4, { each: true })
  proteins: string[];

  @ApiProperty({ example: [] })
  @IsUUID(4, { each: true })
  toppings: string[];
}

export class UpdateDishDto {
  @ApiProperty({ example: "" })
  @IsUUID(4)
  id: string;

  @ApiProperty({ example: "" })
  @IsOptional()
  @IsUUID(4)
  size: string;

  @ApiProperty({ example: "" })
  @IsOptional()
  @IsUUID(4)
  base: string;

  @ApiProperty({ example: [] })
  @IsUUID(4, { each: true })
  @IsOptional()
  proteins: string[];

  @ApiProperty({ example: [] })
  @IsUUID(4, { each: true })
  @IsOptional()
  toppings: string[];
}
