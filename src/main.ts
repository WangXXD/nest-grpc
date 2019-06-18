import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc/grpc-client.options'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
  await app.listen(3001);
}

bootstrap();