import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export default (app: INestApplication): void => {
  const config = new DocumentBuilder()
    .setTitle("PokeJS Doc")
    .setDescription("API documentation for PokeJS")
    .setVersion("1.0.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
};
