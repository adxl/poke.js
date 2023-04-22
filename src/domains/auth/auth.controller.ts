import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  Inject,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { User } from "../users/users.entity";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { ApiTags } from "@nestjs/swagger";
import { JwTAuthGuard } from "./auth.guard";
import { Request } from "express";

@ApiTags("Auth")
@Controller()
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Post("register")
  @UseInterceptors(ClassSerializerInterceptor)
  public register(@Body() body: RegisterDto): Promise<User> {
    return this.authService.register(body);
  }

  @Post("login")
  @HttpCode(200)
  public login(@Body() body: LoginDto): Promise<string> {
    return this.authService.login(body);
  }

  @Get("me")
  @UseGuards(JwTAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  public getOneUserByToken(@Req() request: Request): Promise<User> {
    return this.authService.getOneUserByToken(request);
  }
}
