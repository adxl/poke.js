import { NotFoundException } from "@nestjs/common";

export const NotFoundError = (entity: string, id: string): NotFoundException =>
  new NotFoundException(`${entity.toLowerCase()} with id (${id}) doesn't exist`);
