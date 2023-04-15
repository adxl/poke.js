import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Size } from "./sizes.entity";
import { UpdateSizeDto, InsertSizeDto } from "./sizes.dto";
import { NotFoundError } from "src/exceptions";

@Injectable()
export class SizesService {
  constructor(
    @InjectRepository(Size)
    private sizeRepository: Repository<Size>
  ) {}

  findAll(): Promise<Size[]> {
    return this.sizeRepository.find();
  }

  async findOne(id: string): Promise<Size> {
    const size: Size | null = await this.sizeRepository.findOneBy({ id });
    if (!size) throw NotFoundError("size", id);

    return size;
  }

  async create(sizeDto: InsertSizeDto): Promise<Size> {
    return await this.sizeRepository.save(sizeDto);
  }

  async update(id: string, size: UpdateSizeDto): Promise<void> {
    await this.findOne(id);
    await this.sizeRepository.update(id, size);
  }

  async remove(id: string): Promise<void> {
    await this.sizeRepository.delete(id);
  }
}
