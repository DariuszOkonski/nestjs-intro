import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // only accept dto models
      forbidNonWhitelisted: true, // throw error if dto model is not valid
      transform: true, // transform dto request into model type
    }),
  );

  /**
   * swagger configuration
   */
  const config = new DocumentBuilder()
    .setTitle('NestJS Intro')
    .setDescription('The NestJS Intro API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
