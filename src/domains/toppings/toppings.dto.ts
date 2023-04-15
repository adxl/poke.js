import { IsAlpha, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class createToppingDto {
  @ApiProperty({ example: "Carrote", description: "Name of the Topping" })
  @IsAlpha()
  name: string;

  @ApiProperty({ example: 0.6, description: "Price of the Topping" })
  @IsNumber()
  price: number;
}

export class updateToppingDto {
  @ApiProperty({ example: "Cucumber", description: "Name of the Topping" })
  @IsAlpha()
  @IsOptional()
  name: string;

  @ApiProperty({ example: 0.35, description: "Price of the Topping" })
  @IsNumber()
  @IsOptional()
  price: number;
}
