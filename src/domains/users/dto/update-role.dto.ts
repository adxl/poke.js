import { ApiProperty } from "@nestjs/swagger";
import { IsIn } from "class-validator";

export class UpdateUserRoleDto {
  @ApiProperty({ type: String, example: "USER | ADMIN", description: "role" })
  @IsIn(["USER", "ADMIN"])
  role: "USER" | "ADMIN";
}
