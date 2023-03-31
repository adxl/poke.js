import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { ChangePasswordDto } from "./dto/update-password.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
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

  @Post("/update/pwd")
  @UseGuards(JwTAuthGuard)
  public updatePassword(
    @Body() body: ChangePasswordDto
  ): Promise<object | HttpException> {
    return this.userService.updatePassword(body);
  }

  @Patch("/update/role/:id")
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  public updateRole(@Param("id") id: string): Promise<User | HttpException> {
    return this.userService.updateRole(id);
  }

  @Patch("/update")
  @UseGuards(JwTAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  public updateProfile(
    @Body() body: UpdateUserDto
  ): Promise<User | HttpException> {
    return this.userService.updateProfile(body);
  }
}
