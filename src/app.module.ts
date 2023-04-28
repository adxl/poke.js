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
import { HelmetMiddleware } from "@nest-middlewares/helmet";

@Module({
  imports: [
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
