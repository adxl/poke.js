import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpException,
  Inject,
  Param,
  Patch,
  UseGuards,
  UseInterceptors,
  HttpCode,
} from "@nestjs/common";
import { RoleAdminGuard } from "../auth/admin.guard";
import { JwTAuthGuard } from "../auth/auth.guard";
import { ChangePasswordDto } from "./dto/update-password.dto";
import { UpdateUserRoleDto } from "./dto/update-role.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./users.entity";
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  @Inject(UsersService)
  private readonly userService: UsersService;

  @Get()
  @HttpCode(200)
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  public getAllUsers(): Promise<User[] | HttpException> {
    return this.userService.getAllUsers();
  }

  @Get("/:id")
  @HttpCode(200)
  @UseGuards(JwTAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  public getOneUser(@Param("id") id: string): Promise<User | HttpException> {
    return this.userService.getOneUser(id);
  }

  @Patch("/password")
  @HttpCode(200)
  @UseGuards(JwTAuthGuard)
  public updatePassword(@Body() body: ChangePasswordDto): Promise<object | HttpException> {
    return this.userService.updatePassword(body);
  }

  @Patch("/:id/role")
  @HttpCode(200)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  public updateRole(
    @Param("id") id: string,
    @Body() body: UpdateUserRoleDto
  ): Promise<object | HttpException> {
    return this.userService.updateRole(id, body.role);
  }

  @Patch()
  @HttpCode(200)
  @UseGuards(JwTAuthGuard)
  public updateProfile(@Body() body: UpdateUserDto): Promise<object | HttpException> {
    return this.userService.updateProfile(body);
  }

  @Delete("/:id")
  @HttpCode(204)
  @UseGuards(JwTAuthGuard, RoleAdminGuard)
  public deleteUser(@Param("id") id: string): Promise<object | HttpException> {
    return this.userService.deleteUser(id);
  }
}
