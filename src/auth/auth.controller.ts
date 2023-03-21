import { Body, Controller, Inject, Post } from "@nestjs/common";
import { User } from "src/domains/user/user.entity";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller()
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Post("register")
  public register(@Body() body: RegisterDto): Promise<User | never> {
    return this.authService.register(body);
  }

  @Post("login")
  public login(@Body() body: LoginDto): Promise<string | never> {
    return this.authService.login(body);
  }
}
