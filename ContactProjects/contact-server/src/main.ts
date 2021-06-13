import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      //express에서 검증 하는 미들웨어 설정과 비슷
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //실제 데이터 타입으로 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
