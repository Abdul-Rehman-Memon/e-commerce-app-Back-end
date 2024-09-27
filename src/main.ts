import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.APP_PORT;
  await app
    .listen(port || 3000)
    .then(() =>
      console.log(`Application is running on: http://localhost:${port}`),
    )
    .catch();
}
bootstrap();
