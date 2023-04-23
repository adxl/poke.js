import { LogLevel, ValidationPipe, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import InitSwagger from "./config/swagger.config";
import { AppModule } from "./app.module";
import { Amin } from "./types/special/main/types";

async function initApp(): Amin {
  const app = await NestFactory.create(AppModule, {
    logger: [
      "error",
      ...(process.env.STAGE === "local" ? ["warn", "debug", "log"] : []),
    ] as LogLevel[],
  });

  app.enableCors({
    origin: [/localhost:3000/, /\.vercel\.app$/],
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix("v1");

  InitSwagger(app);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(5000);
}

initApp();
