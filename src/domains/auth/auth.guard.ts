import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard, IAuthGuard } from "@nestjs/passport";

@Injectable()
export class JwTAuthGuard extends AuthGuard("jwt") implements IAuthGuard {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const request: Request = context.switchToHttp().getRequest();

    return request !== undefined;
  }
}
