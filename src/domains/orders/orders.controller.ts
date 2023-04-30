import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  UseGuards,
  Patch,
  ParseUUIDPipe,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Request } from "express";
import { JwTAuthGuard } from "../auth/auth.guard";
import { User } from "../users/users.entity";
import { CreateOrderDto, UpdateOrderDto } from "./orders.dto";
import { Order } from "./orders.entity";
import { OrdersService } from "./orders.service";

@ApiTags("Orders")
@ApiBearerAuth()
@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwTAuthGuard)
  getAll(@Req() request: Request): Promise<Order[]> {
    if ((request.user as User).isAdmin) {
      return this.ordersService.findAll();
    }
    return this.ordersService.findAllSelf((request.user as User).id);
  }

  @Get(":id")
  @HttpCode(200)
  @UseGuards(JwTAuthGuard)
  getOne(@Req() request: Request, @Param("id", new ParseUUIDPipe()) id: string): Promise<Order> {
    if ((request.user as User).isAdmin) {
      return this.ordersService.findOne(id);
    }
    return this.ordersService.findOneByUser(id, (request.user as User).id);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwTAuthGuard)
  create(@Req() request: Request, @Body() order: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(order, request.user as User);
  }

  @Patch(":id")
  @HttpCode(201)
  @UseGuards(JwTAuthGuard)
  update(
    @Req() request: Request,
    @Param("id", new ParseUUIDPipe()) id: string,
    @Body() order: UpdateOrderDto
  ): Promise<Order> {
    return this.ordersService.update(id, order, request.user as User);
  }
}
