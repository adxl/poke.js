import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Repository } from "typeorm";
import { Topping } from "./toppings.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { createToppingDto, updateToppingDto } from "./toppings.dto";

@Injectable()
export class ToppingsService {
  constructor(
    @InjectRepository(Topping)
    private toppingRepository: Repository<Topping>
  ) {}

  getAll(): Promise<Topping[]> {
    return this.toppingRepository.find();
  }

  async getOneById(id: string): Promise<Topping> {
    if (!id) {
      throw new HttpException("You must provide an id", HttpStatus.BAD_REQUEST);
    }

    const topping: Topping | null = await this.toppingRepository.findOneBy({
      id,
    });

    if (!topping) {
      throw new HttpException("Could not find topping", HttpStatus.NOT_FOUND);
    }

    return topping;
  }

  async create(toppingDto: createToppingDto): Promise<Topping> {
    return await this.toppingRepository.save(toppingDto);
  }

  async update(id: string, topping: updateToppingDto): Promise<void> {
    await this.toppingRepository.update(id, topping);
  }

  async remove(id: string): Promise<void> {
    await this.toppingRepository.delete(id);
  }
}
