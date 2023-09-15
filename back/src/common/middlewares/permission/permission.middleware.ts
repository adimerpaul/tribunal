import { HttpStatus, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { PermisosService } from 'src/autorizacion/permisos/permisos.service';
import { MessageEnum } from 'src/common/constants/message.enum';
import { MessageResponse } from 'src/common/entities/message-response';

@Injectable()
export class PermissionMiddleware implements NestMiddleware {
  constructor(readonly permisoService: PermisosService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      try {
        const decodedToken = jwt.verify(token, process.env.AT_JWT_SECRET); // Reemplaza con tu clave secreta
        req.user = decodedToken;
        const usuarios = req.user as any;
        if ((usuarios.usuario as string).localeCompare('root') == 0) {
          next();
        } else {
          const validado = await this.permisoService.findUserPermisos(usuarios.usuario, req.method, req.baseUrl);
          if (!validado) {
            res
              .status(HttpStatus.FORBIDDEN)
              .json(new MessageResponse(MessageEnum.NO_PERMISSION, null, HttpStatus.FORBIDDEN, true));
          }
          next();
        }
      } catch (error) {
        throw new UnauthorizedException(MessageEnum.UNAUTHORIZED, error.e);
      }
    } else {
      next();
    }
  }
}
