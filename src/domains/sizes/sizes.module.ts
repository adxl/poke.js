import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Size } from "./sizes.entity";
import { SizesController } from "./sizes.controller";
import { SizesService } from "./sizes.service";

@Module({
  imports: [TypeOrmModule.forFeature([Size])],
  controllers: [SizesController],
  providers: [SizesService],
})
export class SizesModule {}
