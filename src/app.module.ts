import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from "./domains/auth/auth.module";
import { UsersModule } from "./domains/users/users.module";
import { BasesModule } from "./domains/bases/bases.module";


@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), AuthModule, UsersModule, BasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
