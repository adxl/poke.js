import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class RoleAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    if (!request.user.isAdmin) return false;

    return true;
  }
}
