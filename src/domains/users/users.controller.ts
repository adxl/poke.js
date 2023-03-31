import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { ChangePasswordDto } from "./dto/update-password.dto";
import { User } from "./users.entity";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  @Inject(UsersService)
  private readonly userService: UsersService;

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  public getAllUsers(): Promise<User[] | HttpException> {
    return this.userService.getAllUsers();
  }

  @Get("/:id")
  @UseGuards(JwTAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  public getOneUser(@Param("id") id: string): Promise<User | HttpException> {
    return this.userService.getOneUser(id);
  }

  @Post("/pwd/update")
  @UseGuards(JwTAuthGuard)
  public updatePassword(
    @Body() body: ChangePasswordDto
  ): Promise<object | HttpException> {
    return this.userService.updatePassword(body.oldPwd, body.newPwd);
  }
}
