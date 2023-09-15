import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { MessageEnum } from 'src/common/constants/message.enum';
import { MessageResponse } from 'src/common/entities/message-response';

@Injectable()
export class HttpResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();
    const status = response.statusCode;

    let message = '';

    switch (status) {
      case HttpStatus.OK:
        message = MessageEnum.OK;
        break;
      case HttpStatus.CREATED:
        message = MessageEnum.CREATED;
        break;
      case HttpStatus.ACCEPTED:
        message = MessageEnum.UPDATED;
        break;
      default:
        message = MessageEnum.DEFAULT;
    }
    return next.handle().pipe(
      map(data => {
        if (data instanceof MessageResponse) {
          return new MessageResponse(data.message, data.response, data.status || status, false);
        }
        if (data && data.error) {
          return;
        }
        return new MessageResponse(message, data, status, false);
      }),
    );
  }
}
