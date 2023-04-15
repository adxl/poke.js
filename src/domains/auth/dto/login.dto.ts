import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto {
  @ApiProperty({
    type: String,
    example: "johndoe@example.com",
    description: "email",
  })
  @IsEmail()
  email: string;
  @ApiProperty({ type: String, example: "Password#0", description: "password" })
  @IsNotEmpty()
  password: string;
}
