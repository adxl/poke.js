import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { CreateDishDto, UpdateDishDto } from "../dishes/dishes.dto";

const dishItemCreateExample = {
  size: "",
  base: "",
  proteins: [],
  toppings: [],
};

const dishItemUpdateExample = {
  id: "",
  ...dishItemCreateExample,
};

export class CreateOrderDto {
  @ApiProperty({ example: [dishItemCreateExample] })
  @ValidateNested({ each: true })
  @Type(() => CreateDishDto)
  dishes: CreateDishDto[];
}

export class UpdateOrderDto {
  @IsOptional()
  @ApiProperty({ example: [dishItemUpdateExample] })
  @ValidateNested({ each: true })
  @Type(() => UpdateDishDto)
  dishes: UpdateDishDto[];
}
