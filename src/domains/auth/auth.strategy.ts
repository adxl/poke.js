import { Injectable, Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { User } from "../users/users.entity";
import { AuthHelper } from "./auth.helper";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  @Inject(AuthHelper)
  private readonly usersRepository: Repository<User>;

  constructor(@Inject(ConfigService) config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get("JWT_KEY"),
      ignoreExpiration: true,
    });
  }

  private validate(payload: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ id: payload });
  }
}
