import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./config/typeorm.config";
import { MyEndpointController } from "./controllers/my-endpoint.controller";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    JwtModule.register({
      secret: "mySecretKey", // Use a strong secret key or load it from an environment variable
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [AppController, MyEndpointController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
