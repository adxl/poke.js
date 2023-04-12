import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Size } from "./size.entity";
import { SizeController } from "./size.controller";
import { SizeService } from "./size.service";

@Module({
  imports: [TypeOrmModule.forFeature([Size])],
  controllers: [SizeController],
  providers: [SizeService],
})
export class SizeModule {}
