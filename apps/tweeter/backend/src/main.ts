import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsConfig, NestConfig, SwaggerConfig } from './configs/config.interface';
import { NestExpressApplication } from '@nestjs/platform-express';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get<ConfigService>(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  if (swaggerConfig.enabled) {
    const swaggerOptions = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'Empty title')
      .setDescription(swaggerConfig.description || 'Empty description')
      .setVersion(swaggerConfig.version || '0.0.1')
      .build();
    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup(swaggerConfig.path || 'swagger', app, document);
  }

  if (corsConfig.enabled) {
    app.enableCors();
  }

  const port = process.env.PORT || nestConfig.port || 5001;
  await app.listen(port, () => {
    Logger.log('Tweeter backend app is listening at http://localhost:' + port + '/');
  });
}

bootstrap();
