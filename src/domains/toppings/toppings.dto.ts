import { IsAlpha, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateToppingDto {
  @ApiProperty({ example: "Carottes" })
  @IsAlpha()
  name: string;

  @ApiProperty({ example: 0.6 })
  @IsNumber()
  price: number;
}

export class UpdateToppingDto {
  @ApiProperty({ example: "Concombres" })
  @IsAlpha()
  @IsOptional()
  name: string;

  @ApiProperty({ example: 0.35 })
  @IsNumber()
  @IsOptional()
  price: number;
}
