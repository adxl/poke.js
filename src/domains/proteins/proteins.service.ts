import { Injectable } from "@nestjs/common";
import { DeleteResult, In, Repository, UpdateResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProteinDto, UpdateProteinDto } from "./proteins.dto";
import { NotFoundError } from "src/exceptions";
import { Protein } from "./proteins.entity";

@Injectable()
export class ProteinsService {
  constructor(
    @InjectRepository(Protein)
    private readonly proteinsRepository: Repository<Protein>
  ) {}

  findAll(): Promise<Protein[]> {
    return this.proteinsRepository.find();
  }

  findAllById(ids: string[] = []): Promise<Protein[]> {
    return this.proteinsRepository.findBy({ id: In(ids) });
  }

  async findOne(id: string): Promise<Protein> {
    const protein: Protein | null = await this.proteinsRepository.findOneBy({ id });
    if (!protein) throw NotFoundError("protein", id);

    return protein;
  }

  create(protein: CreateProteinDto): Promise<Protein> {
    return this.proteinsRepository.save(protein);
  }

  async update(id: string, protein: UpdateProteinDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.proteinsRepository.update(id, protein);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.proteinsRepository.delete(id);
  }
}
