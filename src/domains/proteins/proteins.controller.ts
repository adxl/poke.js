import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  UseGuards,
} from "@nestjs/common";
import { ProteinsService } from "./proteins.service";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateProteinDto, UpdateProteinDto } from "./proteins.dto";
import { Protein } from "./proteins.entity";
import { DeleteResult, UpdateResult } from "typeorm";

@ApiTags("Proteins")
@Controller("/proteins")
@ApiBearerAuth()
export class ProteinsController {
  constructor(private readonly proteinsService: ProteinsService) {}

  @Get()
  @HttpCode(200)
  getAll(): Promise<Protein[]> {
    return this.proteinsService.findAll();
  }

  @Get(":id")
  @HttpCode(200)
  getOne(@Param("id") id: string): Promise<Protein> {
    return this.proteinsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  create(@Body() body: CreateProteinDto): Promise<Protein> {
    return this.proteinsService.create(body);
  }

  @Patch(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  update(@Param("id") id: string, @Body() topping: UpdateProteinDto): Promise<UpdateResult> {
    return this.proteinsService.update(id, topping);
  }

  @Delete(":id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  delete(@Param("id") id: string): Promise<DeleteResult> {
    return this.proteinsService.remove(id);
  }
}
