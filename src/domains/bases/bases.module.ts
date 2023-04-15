import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Base } from "./bases.entity";
import { BasesController } from "./bases.controller";
import { BasesService } from "./bases.service";

@Module({
  imports: [TypeOrmModule.forFeature([Base])],
  controllers: [BasesController],
  providers: [BasesService],
})
export class BasesModule {}
