import { IsAlpha, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class createBaseDto {
  @ApiProperty({ example: "Rice", description: "Name of the Base" })
  @IsAlpha()
  name: string;

  @ApiProperty({ example: "2.50", description: "Price of the Base" })
  @IsNumber()
  price: number;
}
