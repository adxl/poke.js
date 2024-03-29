import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  Header,
  UseGuards,
  ParseUUIDPipe,
} from "@nestjs/common";
import { SizesService } from "./sizes.service";
import { Size } from "./sizes.entity";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UpdateSizeDto, InsertSizeDto } from "./sizes.dto";

@ApiBearerAuth()
@ApiTags("Sizes")
@Controller("sizes")
export class SizesController {
  constructor(private readonly sizeService: SizesService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  create(@Body() size: InsertSizeDto): Promise<Size> {
    return this.sizeService.create(size);
  }

  @Get()
  @HttpCode(200)
  @Header("poke-app", "Size")
  findAll(): Promise<Size[]> {
    return this.sizeService.findAll();
  }

  @Get(":id")
  @HttpCode(200)
  findOne(@Param("id", new ParseUUIDPipe()) id: string): Promise<Size> {
    return this.sizeService.findOne(id);
  }

  @Patch(":id")
  @HttpCode(200)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  update(@Param("id", new ParseUUIDPipe()) id: string, @Body() size: UpdateSizeDto): Promise<void> {
    return this.sizeService.update(id, size);
  }

  @Delete(":id")
  @HttpCode(204)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  remove(@Param("id", new ParseUUIDPipe()) id: string): Promise<void> {
    return this.sizeService.remove(id);
  }
}
