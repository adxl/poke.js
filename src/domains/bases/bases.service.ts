import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Base } from "./bases.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { createBaseDto } from "./bases.dto";
import { log } from "console";

@Injectable()
export class BasesService {
  constructor(
    @InjectRepository(Base)
    private baseRepository: Repository<Base>
  ) {}

  getAll(): Promise<Base[]> {
    return this.baseRepository.find(); // SELECT * FROM Base
  }

  async getOneById(id: string): Promise<Base> {
    try {
      const base = await this.baseRepository.findOneOrFail({
        where: { id: id },
      }); // SELECT * FROM Base WHERE base = id
      return base;
    } catch (err) {
      // handle error
      throw err;
    }
  }

  async create(baseDto: createBaseDto): Promise<Base> {
    return await this.baseRepository.save(baseDto);
  }

  async update(id: string, base: createBaseDto): Promise<void> {
    await this.baseRepository.update(id, base);
  }

  async remove(id: string): Promise<void> {
    await this.baseRepository.delete(id);
  }
}
