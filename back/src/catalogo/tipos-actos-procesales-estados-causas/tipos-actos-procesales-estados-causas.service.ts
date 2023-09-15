import { Inject, Injectable } from '@nestjs/common';
import { TipoActoProcesalEstadoCausaRepository } from './repositories/tipo-acto-procesal-estado-causa.repository';

@Injectable()
export class TiposActosProcesalesEstadosCausasService {
  constructor(
    @Inject(TipoActoProcesalEstadoCausaRepository)
    private readonly tipoActoProcesalEstadoCausaRepository: TipoActoProcesalEstadoCausaRepository,
  ) {}

  async findAll() {
    return await this.tipoActoProcesalEstadoCausaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tipoActoProcesalEstadoCausaRepository.findOneById(id);
  }
}
