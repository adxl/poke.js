import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import InitSwagger from "./config/swagger.config";
import { AppModule } from "./app.module";
import { Amin } from "./types/special/main/types";

async function initApp(): Amin {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [/localhost:3000/, /\.vercel\.app$/],
  });

  InitSwagger(app);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(5000);
}

initApp();
