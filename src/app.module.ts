import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./config/typeorm.config";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    JwtModule.register({
      secret: "mySecretKey", // Use a strong secret key or load it from an environment variable
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
