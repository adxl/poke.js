import { IsStrongPassword, Length } from "class-validator";

export class ChangePasswordDto {
  @IsStrongPassword()
  @Length(8)
  oldPwd: string;

  @IsStrongPassword()
  @Length(8)
  newPwd: string;
}
