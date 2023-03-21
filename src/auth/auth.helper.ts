import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domains/user/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcryptjs";

// Helper class for authentication
@Injectable()
export class AuthHelper {
  @InjectRepository(User)
  private readonly repo: Repository<User>;

  constructor(private readonly jwt: JwtService) {}

  // Generate a JWT token
  public generateToken(user: User): string {
    return this.jwt.sign({ id: user.id, email: user.email });
  }

  // Decode a JWT token
  public decodeToken(token: string): any {
    return this.jwt.verify(token);
  }

  // Get a user by id
  public async getUserById(id: string): Promise<User> {
    return await this.repo.findOneBy({ id });
  }

  // Validate a user's password
  public validPwd(user: User, pwd: string): boolean {
    return bcrypt.compareSync(pwd, user.password);
  }

  // Hash a password
  public hashPwd(pwd: string): string {
    const salt: string = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(pwd, salt);
  }

  // Verify if JWT token is valid
  private async verifyToken(token: string): Promise<boolean> {
    const verified: any = this.jwt.verify(token);

    if (!verified) {
      throw new HttpException("Invalid token", HttpStatus.UNAUTHORIZED);
    }

    const user: User = await this.getUserById(verified.id);

    if (!user) {
      throw new HttpException("Invalid token", HttpStatus.UNAUTHORIZED);
    }

    return true;
  }
}
