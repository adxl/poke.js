// size.service.ts
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Size } from "./sizes.entity";
import { UpdateSizeDto, InsertSizeDto } from "./sizes.dto";

@Injectable()
export class SizeService {
  constructor(
    @InjectRepository(Size)
    private sizeRepository: Repository<Size>
  ) {}

  async create(sizeDto: InsertSizeDto): Promise<Size> {
    return await this.sizeRepository.save(sizeDto);
  }

  findAll(): Promise<Size[]> {
    return this.sizeRepository.find();
  }

  async getOneById(id: string): Promise<Size> {
    if (!id) {
      throw new HttpException("You must provide an id", HttpStatus.BAD_REQUEST);
    }

    const size: Size | null = await this.sizeRepository.findOneBy({ id });

    if (!size) {
      throw new HttpException("Could not find size", HttpStatus.NOT_FOUND);
    }

    return size;
  }

  async update(id: string, size: UpdateSizeDto): Promise<void> {
    await this.getOneById(id);
    await this.sizeRepository.update(id, size);
  }

  async remove(id: string): Promise<void> {
    await this.sizeRepository.delete(id);
  }
}
