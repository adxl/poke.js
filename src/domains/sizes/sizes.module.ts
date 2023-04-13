import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Size } from "./sizes.entity";
import { SizeController } from "./sizes.controller";
import { SizeService } from "./sizes.service";

@Module({
  imports: [TypeOrmModule.forFeature([Size])],
  controllers: [SizeController],
  providers: [SizeService],
})
export class SizeModule {}
