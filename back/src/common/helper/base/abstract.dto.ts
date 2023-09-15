import { BadRequestException } from '@nestjs/common';
import { Messages } from '../respuesta/messages';
import { SuccessResponseDto } from '../respuesta/success.dto';
export abstract class AbstractController {
  makeResponse(data, err, status, message: string): SuccessResponseDto {
    return {
      status: status,
      response: data,
      message: message,
      error: err,
    };
  }

  success(data, err, status, message = Messages.SUCCESS_DEFAULT): SuccessResponseDto {
    return this.makeResponse(data, err, status, message);
  }

  successList(data, err: false, status, message = Messages.SUCCESS_LIST): SuccessResponseDto {
    return this.makeResponse(data, err, status, message);
  }

  successUpdate(data, err, status, message = Messages.SUCCESS_UPDATE): SuccessResponseDto {
    return this.makeResponse(data, err, status, message);
  }

  successDelete(data, err, status, message = Messages.SUCCESS_DELETE): SuccessResponseDto {
    return this.makeResponse(data, err, status, message);
  }

  successCreate(data, err, status, message = Messages.SUCCESS_CREATE): SuccessResponseDto {
    return this.makeResponse(data, err, status, message);
  }

  successListRows(data, err, status, message = Messages.SUCCESS_LIST): SuccessResponseDto {
    const [filas, total] = data;
    return this.makeResponse({ total, filas }, err, status, message);
  }

  getUser(req) {
    if (req?.user?.id) {
      return req.user.id;
    }
    throw new BadRequestException(`Es necesario que esté autenticado para consumir este recurso.`);
  }
}
