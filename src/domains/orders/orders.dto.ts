import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { CreateDishDto, UpdateDishDto } from "../dishes/dishes.dto";

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

export class UpdateOrderDto {
  @IsOptional()
  @ApiProperty({ example: [dishItemExample] })
  @ValidateNested({ each: true })
  @Type(() => UpdateDishDto)
  dishes: UpdateDishDto[];
}
