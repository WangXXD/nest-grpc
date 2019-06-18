import { Module } from "@nestjs/common";
import { HeroController } from "./controller/hero.controller";

@Module({
  controllers: [HeroController]
})

export class HeroModule { }