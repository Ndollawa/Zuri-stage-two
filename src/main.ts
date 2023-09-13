import { NestFactory } from '@nestjs/core';
import * as config from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  // const server = config.get('server');
  const port = process.env.PORT || 3500; //server.port;

  await app.listen(port);
}
bootstrap();
