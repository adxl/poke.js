import { IsString, IsNumber, IsOptional } from "class-validator";

export class InsertSizeDto {
  @IsString()
  label: string;

  @IsNumber()
  value: number;
}

export class UpdateSizeDto {
  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsNumber()
  value?: number;
}
