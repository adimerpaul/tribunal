import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { GlobalService } from '../global.service';
import { MessageEnum } from 'src/common/constants/message.enum';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride('isPublic', [context.getHandler(), context.getClass()]);

    if (isPublic) return true;

    return super.canActivate(context);
  }

  handleRequest(err, user, info, context: ExecutionContext) {
    if (err) throw err;
    if (!user)
      throw new UnauthorizedException({
        message: MessageEnum.UNAUTHORIZED,
        data: null,
      });

    GlobalService.userNameSession = user.usuario;

    if (context?.switchToHttp()) {
      const { headers, connection, socket } = context.switchToHttp().getRequest();
      this.setAppClient(headers);
      this.setHostClient(headers, connection, socket);
      GlobalService.macClientSession = headers.mac_client ? headers.mac_client : 'unknown';
    }

    return user;
  }

  setAppClient(headers: any) {
    if (headers['app_client']) GlobalService.appClientSession = headers['app_client'];
    else if (headers['referer']?.includes('apidoc') && headers['sec-ch-ua']) {
      const browser = headers['sec-ch-ua']?.split(',')?.pop()?.trim() || '';
      const platform = headers['sec-ch-ua-platform'] || '';
      GlobalService.appClientSession = `Swagger - ${browser} ${platform}`;
    } else if (headers['user-agent']) GlobalService.appClientSession = headers['user-agent'].substring(0, 70);
    else GlobalService.appClientSession = 'api_rest';
  }

  setHostClient(headers: any, connection: any, socket: any) {
    if (headers['host_client']) GlobalService.hostClientSession = headers['host_client'];
    else if (headers['x-forwarded-for'])
      GlobalService.hostClientSession = headers['x-forwarded-for']?.split(',').shift();
    else GlobalService.hostClientSession = connection?.remoteAddress || socket?.remoteAddress || 'unknown';
  }
}
