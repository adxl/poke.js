import { Injectable } from "@nestjs/common";
import { DeleteResult, In, Repository, UpdateResult } from "typeorm";
import { Topping } from "./toppings.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateToppingDto, UpdateToppingDto } from "./toppings.dto";
import { NotFoundError } from "src/exceptions";

@Injectable()
export class ToppingsService {
  constructor(
    @InjectRepository(Topping)
    private readonly toppingsRepository: Repository<Topping>
  ) {}

  findAll(): Promise<Topping[]> {
    return this.toppingsRepository.find();
  }

  findAllById(ids: string[] = []): Promise<Topping[]> {
    return this.toppingsRepository.findBy({ id: In(ids) });
  }

  async findOne(id: string): Promise<Topping> {
    const topping: Topping | null = await this.toppingsRepository.findOneBy({ id });
    if (!topping) throw NotFoundError("topping", id);

    return topping;
  }

  create(topping: CreateToppingDto): Promise<Topping> {
    return this.toppingsRepository.save(topping);
  }

  async update(id: string, topping: UpdateToppingDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.toppingsRepository.update(id, topping);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.toppingsRepository.delete(id);
  }
}
