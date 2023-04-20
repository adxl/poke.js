import { Injectable } from "@nestjs/common";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Dish } from "./dishes.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundError } from "src/exceptions";
import { CreateDishDto } from "./dishes.dto";
import { SizesService } from "../sizes/sizes.service";
import { BasesService } from "../bases/bases.service";
import { ToppingsService } from "../toppings/toppings.service";
import { ProteinsService } from "../proteins/proteins.service";

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
    private readonly sizesService: SizesService,
    private readonly basesService: BasesService,
    private readonly toppingsService: ToppingsService,
    private readonly proteinsService: ProteinsService
  ) {}

  findAll(): Promise<Dish[]> {
    return this.dishRepository.find({ relations: ["toppings", "proteins"] });
  }

  async findOne(id: string): Promise<Dish> {
    const dish: Dish | null = await this.dishRepository.findOneBy({ id });
    if (!dish) throw NotFoundError("dish", id);

    return dish;
  }

  async create(data: CreateDishDto): Promise<Dish> {
    const [size, base, toppings, proteins] = await Promise.all([
      this.sizesService.findOne(data.size),
      this.basesService.findOne(data.base),
      this.toppingsService.findAllById(data.toppings),
      this.proteinsService.findAllById(data.proteins),
    ]);

    const dish = this.dishRepository.create({ size, base, toppings, proteins });

    return this.dishRepository.save(dish);
  }

  async createMany(data: CreateDishDto[]): Promise<Dish[]> {
    return Promise.all(data.map((dish) => this.create(dish)));
  }

  async update(id: string /*, data: UpdateDishDto */): Promise<UpdateResult> {
    await this.findOne(id);

    /* TODO: convertir la data en Dish object */

    const dish = {};
    return this.dishRepository.update(id, dish);
  }

  async remove(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.dishRepository.delete(id);
  }
}
