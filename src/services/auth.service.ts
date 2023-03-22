// src/services/auth.service.ts
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Implement your user validation logic here.
    // For this example, we'll assume the user is always valid
    // and has the following hardcoded data.
    const user = {
      id: 1,
      username: "testuser",
      password: "testpassword",
    };

    if (username === user.username && password === user.password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(credentials: { username: string; password: string }) {
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );

    if (!user) {
      return null;
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
