import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Repository } from "typeorm";
import { Dish } from "./dishes.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>
  ) {}

  getAll(): Promise<Dish[]> {
    return this.dishRepository.find();
  }

  async getOneById(id: string): Promise<Dish> {
    if (!id) {
      throw new HttpException("You must provide an id", HttpStatus.BAD_REQUEST);
    }

    const dish: Dish | null = await this.dishRepository.findOneBy({ id });

    if (!dish) {
      throw new HttpException("Could not find dish", HttpStatus.NOT_FOUND);
    }

    return dish;
  }

  // async create(dishDto: createDishDto): Promise<Dish> {
  //   return await this.dishRepository.save(dishDto);
  // }

  // async update(id: string, dishDto: updateDishDto): Promise<void> {
  //   await this.dishRepository.update(id, dishDto);
  // }

  async remove(id: string): Promise<void> {
    await this.dishRepository.delete(id);
  }
}
