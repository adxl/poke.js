import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsEmail, Length } from "class-validator";

export class RegisterDto {
  @ApiProperty({ type: String, example: "John", description: "firstName" })
  @IsAlpha()
  firstName: string;
  @ApiProperty({ type: String, example: "Doe", description: "lastName" })
  @IsAlpha()
  lastName: string;
  @ApiProperty({
    type: String,
    example: "johndoe@example.com",
    description: "email",
  })
  @IsEmail()
  email: string;
  @ApiProperty({ type: String, example: "Password#0", description: "password" })
  @Length(8, 64)
  password: string;
}
