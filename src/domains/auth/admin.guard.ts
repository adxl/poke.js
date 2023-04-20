import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class RoleAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    return true;
    return context.switchToHttp().getRequest().user.isAdmin;
  }
}
