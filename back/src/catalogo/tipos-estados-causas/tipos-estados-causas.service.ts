import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';
import { MessageResponse } from 'src/common/entities/message-response';
import { TipoEstadoCausaRepository } from './repositories/tipo-estado-causa.repository';

@Injectable()
export class TiposEstadosCausasService {
  constructor(
    @Inject(TipoEstadoCausaRepository)
    private readonly tiposEstadosCausasRepository: TipoEstadoCausaRepository,
  ) {}
  async findAll() {
    return await this.tiposEstadosCausasRepository.findAll();
  }

  async findOne(id: number) {
    const resultado = await this.tiposEstadosCausasRepository.findOneById(id);
    return new MessageResponse(MessageEnum.OK, resultado, HttpStatus.OK, false);
  }
}
