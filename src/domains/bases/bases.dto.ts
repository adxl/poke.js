import { IsAlpha, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class createBaseDto {
  @ApiProperty({ example: "Rice", description: "Name of the Base" })
  @IsAlpha()
  name: string;

  @ApiProperty({ example: 2.50, description: "Price of the Base" })
  @IsNumber()
  price: number;
}

export class updateBaseDto {
    @ApiProperty({ example: "Rice", description: "Name of the Base" })
    @IsAlpha()
    @IsOptional()
    name: string;
  
    @ApiProperty({ example: 2.50, description: "Price of the Base" })
    @IsNumber()
    @IsOptional()
    price: number;
  }