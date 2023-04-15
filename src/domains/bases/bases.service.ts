import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Base } from "./bases.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { createBaseDto, updateBaseDto } from "./bases.dto";
import { NotFoundError } from "src/exceptions";

@Injectable()
export class BasesService {
  constructor(
    @InjectRepository(Base)
    private baseRepository: Repository<Base>
  ) {}

  findAll(): Promise<Base[]> {
    return this.baseRepository.find();
  }

  async findOne(id: string): Promise<Base> {
    const base: Base | null = await this.baseRepository.findOneBy({ id });
    if (!base) throw NotFoundError("base", id);

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
