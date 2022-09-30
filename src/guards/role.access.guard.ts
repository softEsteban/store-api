import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'src/module-auth/services/auth.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  /**
   * Validates endpoint url with
   * user role access
   * @param context Execution context
   * @returns Boolean
   */
  async canActivate(context: ExecutionContext): Promise<any> {
    const [req, res, next] = context.getArgs();

    //Gets auth header with user id
    let auth_header = req.headers.auth;
    let path = req.originalUrl;

    let check = await this.authService.validateUrlAccessByUser(
      auth_header,
      path,
    );

    if (!check) {
      new UnauthorizedException();
    } else {
      return true;
    }
  }
}
