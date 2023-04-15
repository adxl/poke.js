import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsNumber, IsOptional } from "class-validator";

export class CreateProteinDto {
  @ApiProperty({ example: "Poulet" })
  @IsAlpha()
  name: string;

  @ApiProperty({ example: 1.5 })
  @IsNumber()
  price: number;
}

export class UpdateProteinDto {
  @ApiProperty({ example: "Crevettes" })
  @IsAlpha()
  @IsOptional()
  name: string;

  @ApiProperty({ example: 1.25 })
  @IsNumber()
  @IsOptional()
  price: number;
}
