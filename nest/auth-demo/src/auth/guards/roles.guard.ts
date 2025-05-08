import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '../enum/role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { AuthPayload } from '../types/auth-payload.types';
import { UserService } from 'src/user/user.service';
import { CurrentUser } from '../types/current-user';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]); // this will get all the roles present in array inside the role decorators

    const user: CurrentUser = context.switchToHttp().getRequest().user; // here the jwtGurad will verify the user role and attach  {id,email,role} to user object in request body

    const hasRequiredRole = requireRoles.some((role) => user.role === role);
    return hasRequiredRole;
  }
}
