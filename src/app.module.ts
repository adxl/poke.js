import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from "./domains/auth/auth.module";
import { UsersModule } from "./domains/users/users.module";
import { BasesModule } from "./domains/bases/bases.module";
import { SizeModule } from "./domains/sizes/sizes.module";
import { DishesModule } from "./domains/dishes/dishes.module";
import { ToppingsModule } from "./domains/toppings/toppings.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    AuthModule,
    UsersModule,
    BasesModule,
    SizeModule,
    ToppingsModule,
    DishesModule
  ],
})
export class AppModule {}
