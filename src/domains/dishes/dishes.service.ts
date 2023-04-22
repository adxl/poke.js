import { Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { Dish } from "./dishes.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundError } from "src/exceptions";
import { CreateDishDto, UpdateDishDto } from "./dishes.dto";
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

  async update(id: string, data: UpdateDishDto): Promise<Dish> {
    await this.findOne(id);
    const [size, base, toppings, proteins] = await Promise.all([
      this.sizesService.findOne(data.size),
      this.basesService.findOne(data.base),
      this.toppingsService.findAllById(data.toppings),
      this.proteinsService.findAllById(data.proteins),
    ]);
    const dish: Dish = this.dishRepository.create({ size, base, toppings, proteins });
    if ("base" in data) {
      dish.base = await this.basesService.findOne(data.base);
    }
    if ("size" in data) {
      dish.size = await this.sizesService.findOne(data.size);
    }
    if ("toppings" in data) {
      dish.toppings = await this.toppingsService.findAllById(data.toppings);
    }
    if ("proteins" in data) {
      dish.proteins = await this.proteinsService.findAllById(data.proteins);
    }
    return this.dishRepository.save(dish);
  }

  async updateMany(data: UpdateDishDto[]): Promise<Dish[]> {
    return Promise.all(data.map((dish) => this.update(dish.id, dish)));
  }

  async remove(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.dishRepository.delete(id);
  }
}
