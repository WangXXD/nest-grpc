import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { HeroController } from './grpc/controller/hero.controller';
import { HeroModule } from './grpc/grpc.module';

@Module({
  imports: [HeroModule],
  // controllers: [HeroController],
  // providers: [AppService],
})
export class AppModule { }
