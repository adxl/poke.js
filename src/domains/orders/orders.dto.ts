import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { CreateDishDto } from "../dishes/dishes.dto";

const dishItemExample = {
  size: "",
  base: "",
  proteins: [],
  toppings: [],
};

export class CreateOrderDto {
  @ApiProperty({ example: [dishItemExample] })
  @ValidateNested({ each: true })
  @Type(() => CreateDishDto)
  dishes: CreateDishDto[];
}
