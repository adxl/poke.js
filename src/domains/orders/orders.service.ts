import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DishesService } from "../dishes/dishes.service";
import { User } from "../users/users.entity";
import { CreateOrderDto } from "./orders.dto";
import { Order } from "./orders.entity";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    private readonly dishesService: DishesService
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find({
      relations: ["user", "dishes", "dishes.toppings", "dishes.proteins"],
    });
  }

  findAllSelf(userId: string): Promise<Order[]> {
    return this.ordersRepository.find({ where: { user: { id: userId } } });
  }

  async findOne(id: string): Promise<Order> {
    const order: Order | null = await this.ordersRepository.findOne({
      where: { id },
      relations: ["user"],
    });
    if (!order) throw new NotFoundException(`Could not find order ${id}`);

    return order;
  }

  async findOneByUser(orderId: string, userId: string): Promise<Order> {
    const order: Order | null = await this.ordersRepository.findOneBy({
      id: orderId,
      user: { id: userId },
    });
    if (!order) throw new NotFoundException(`Could not find order ${orderId}`);

    return order;
  }

  async create(data: CreateOrderDto, user: User): Promise<Order> {
    const dishes = await this.dishesService.createMany(data.dishes);
    const order = this.ordersRepository.create({ dishes, user });

    return this.ordersRepository.save(order);
  }

  //async update(): Promise<UpdateResult> {
  //  await this.findOneByUser(id, userId);
  //  //
  //}
}
