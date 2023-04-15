import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Topping } from "./toppings.entity";
import { ToppingsController } from "./toppings.controller";
import { ToppingsService } from "./toppings.service";

@Module({
  imports: [TypeOrmModule.forFeature([Topping])],
  controllers: [ToppingsController],
  providers: [ToppingsService],
})
export class ToppingsModule {}
