// src/controllers/auth.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from "@nestjs/swagger";
import { AuthService } from "../services/auth.service";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiOperation({ summary: "Authenticate and generate a JWT token" })
  @ApiBody({
    description: "User credentials",
    type: { username: String, password: String },
  })
  @ApiResponse({ status: 201, description: "Success" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async login(@Body() credentials: { username: string; password: string }) {
    return await this.authService.login(credentials);
  }
}
