import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import InitSwagger from "./config/swagger.config";

async function initApp() {
  const app = await NestFactory.create(AppModule);
  InitSwagger(app);

  await app.listen(5000);
}

initApp();
