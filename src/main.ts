import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { configuration } from './configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  Logger.log('Application runing at port ' + AppModule.port, 'Bootstrap');
  Logger.log(configuration(), 'Configuration');
}
bootstrap();
