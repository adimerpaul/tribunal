import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    let message = '',
      messageResponse = [];
    const jsonException = JSON.parse(JSON.stringify(exception.getResponse()));
    if (jsonException.error === undefined) {
      // Error controlado con objeto
      message = jsonException.message;
      messageResponse = jsonException.data;
    } else if (jsonException.error.includes('Error')) {
      // Error controlado
      message = jsonException.error;
      messageResponse = jsonException.message.split('|');
    } else {
      message = `Error: No se logró completar la operación. ${jsonException.error}`;
      messageResponse = jsonException.message;
    }

    const body = {
      error: true,
      message,
      response: messageResponse,
      status,
    };

    this.logger.error(
      `${request.url} ` +
        JSON.stringify(request.body) +
        ` o: ${body.status} ${body.message} ` +
        JSON.stringify(body.response),
    );

    response.status(status).json(body);
  }
}
