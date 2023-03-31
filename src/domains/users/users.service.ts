import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Scope,
} from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "express";
import { Repository } from "typeorm";
import { AuthHelper } from "../auth/auth.helper";
import { UserDto } from "./dto/user.dto";
import { User } from "./users.entity";

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  constructor(@Inject(REQUEST) private readonly request: Request) {}

  public async getAllUsers(): Promise<User[] | HttpException> {
    const users = await this.userRepository.find();

    if (!users || users.length === 0) {
      throw new HttpException("No users found", HttpStatus.NOT_FOUND);
    }

    return users;
  }

  public async getOneUser(id: string): Promise<User | HttpException> {
    if (!id) {
      throw new HttpException("You must provide an id", HttpStatus.BAD_REQUEST);
    }

    const user: User | null = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new HttpException("Could not find user", HttpStatus.NOT_FOUND);
    }

    return user;
  }

  public async updatePassword(
    oldPwd: string,
    newPwd: string
  ): Promise<object | HttpException> {
    if (!oldPwd || !newPwd)
      throw new HttpException(
        "You must provide all the informations",
        HttpStatus.BAD_REQUEST
      );

    const reqUser: UserDto = <UserDto>this.request.user;

    if (!reqUser.id)
      throw new HttpException(
        "You must provide all the informations",
        HttpStatus.BAD_REQUEST
      );

    const user: User | null = await this.userRepository.findOneBy({
      id: reqUser.id,
    });

    if (!user || !this.helper.validPwd(user, oldPwd)) {
      throw new HttpException("Could not find user", HttpStatus.NOT_FOUND);
    }

    user.password = this.helper.hashPwd(newPwd);

    this.userRepository.save(user);

    return { message: "Password changed succesfully !" };
  }
}
