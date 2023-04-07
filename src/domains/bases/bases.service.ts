import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Base } from "./bases.entity";
import { InjectRepository } from "@nestjs/typeorm";

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
      }); // SELECT * FROM Base WHERE user = id
      return base;
    } catch (err) {
      // handle error
      throw err;
    }
  }

  create(base: Base): Promise<Base> {
    return this.baseRepository.save(base);
  }

  async update(id: string, base: Base): Promise<void> {
    await this.baseRepository.update(id, base);
  }

  async remove(id: string): Promise<void> {
    await this.baseRepository.delete(id);
  }
}
