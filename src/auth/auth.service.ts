import {
  Body,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domains/user/user.entity";
import { Repository } from "typeorm";
import { AuthHelper } from "./auth.helper";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  public async register(body: RegisterDto): Promise<User | HttpException> {
    const exists: User = await this.repository.findOneBy({ email: body.email });

    if (exists) {
      throw new HttpException("User already exists", HttpStatus.CONFLICT);
    }

    body.password = this.helper.hashPwd(body.password);

    return this.repository.save(body);
  }

  public async login(body: LoginDto): Promise<string | HttpException> {
    const exists: User = await this.repository.findOneBy({ email: body.email });

    if (!exists) {
      throw new HttpException("Could not find user", HttpStatus.NOT_FOUND);
    }

    const isPwdValid = this.helper.validPwd(exists, body.password);

    if (!isPwdValid) {
      throw new HttpException("Could not find user", HttpStatus.NOT_FOUND);
    }

    return this.helper.generateToken(exists);
  }
}
