import { IsIn } from "class-validator";

export class UpdateUserRoleDto {
  @IsIn(["USER", "ADMIN"])
  role: string;
}
