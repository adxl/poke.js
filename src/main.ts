import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import InitSwagger from "./config/swagger.config";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function initApp() {
  const app = await NestFactory.create(AppModule);
  InitSwagger(app);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(5000);
}

initApp();
