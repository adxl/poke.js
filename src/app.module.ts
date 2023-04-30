import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
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
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { ThrottleConfig } from "./config/throttle.config";
import { HelmetMiddleware } from "@nest-middlewares/helmet";

@Module({
  imports: [
    ThrottlerModule.forRoot(ThrottleConfig),
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    HelmetMiddleware.configure({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["`self`"],
        },
      },
    });
    consumer.apply(HelmetMiddleware).forRoutes("*");
  }
}
