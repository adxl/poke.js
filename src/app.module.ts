import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from "./domains/auth/auth.module";
import { UsersModule } from "./domains/users/users.module";
import { BasesModule } from "./domains/bases/bases.module";
import { SizesModule } from "./domains/sizes/sizes.module";
import { DishesModule } from "./domains/dishes/dishes.module";
import { OrdersModule } from "./domains/orders/orders.module";
import { ToppingsModule } from "./domains/toppings/toppings.module";
import { ProteinsModule } from "./domains/proteins/proteins.module";
import { ThrottlerModule as throttleModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard } from "@nestjs/throttler";

@Module({
  imports: [
    throttleModule.forRoot({
      ttl: 30,
      limit: 10,
    }),
    TypeOrmModule.forRoot(TypeOrmConfig),
    AuthModule,
    UsersModule,
    BasesModule,
    OrdersModule,
    SizesModule,
    ToppingsModule,
    DishesModule,
    ProteinsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
