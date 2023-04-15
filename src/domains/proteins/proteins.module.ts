import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProteinsController } from "./proteins.controller";
import { Protein } from "./proteins.entity";
import { ProteinsService } from "./proteins.service";

@Module({
  imports: [TypeOrmModule.forFeature([Protein])],
  controllers: [ProteinsController],
  providers: [ProteinsService],
})
export class ProteinsModule {}
