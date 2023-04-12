// size.service.ts
import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, QueryFailedError } from "typeorm";
import { Size } from "./size.entity";
import { UpdateSizeDto, InsertSizeDto } from "./size.dto";

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
      throw new HttpException("Could not find base", HttpStatus.NOT_FOUND);
    }

    return size;
  }

  async update(id: string, size: UpdateSizeDto): Promise<void> {
    try {
      const updateResult = await this.sizeRepository
        .createQueryBuilder()
        .update(Size)
        .set(size)
        .where("id = :id", { id })
        .execute();
      if (updateResult.affected === 0) {
        throw new NotFoundException(`Size with id ${id} not found`);
      }
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new BadRequestException("Update values are not defined");
      }
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    await this.sizeRepository.delete(id);
  }
}
