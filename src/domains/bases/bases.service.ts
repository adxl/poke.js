import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Repository } from "typeorm";
import { Base } from "./bases.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { createBaseDto, updateBaseDto } from "./bases.dto";

@Injectable()
export class BasesService {
  constructor(
    @InjectRepository(Base)
    private baseRepository: Repository<Base>
  ) {}

  getAll(): Promise<Base[]> {
    return this.baseRepository.find();
  }

  async getOneById(id: string): Promise<Base> {
    if (!id) {
      throw new HttpException("You must provide an id", HttpStatus.BAD_REQUEST);
    }

    const base: Base | null = await this.baseRepository.findOneBy({ id });

    if (!base) {
      throw new HttpException("Could not find base", HttpStatus.NOT_FOUND);
    }

    return base;
  }

  async create(baseDto: createBaseDto): Promise<Base> {
    return await this.baseRepository.save(baseDto);
  }

  async update(id: string, base: updateBaseDto): Promise<void> {
    await this.baseRepository.update(id, base);
  }

  async remove(id: string): Promise<void> {
    await this.baseRepository.delete(id);
  }
}
