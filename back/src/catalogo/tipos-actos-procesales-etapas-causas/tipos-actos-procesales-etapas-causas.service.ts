import { Inject, Injectable } from '@nestjs/common';
import { TipoActoProcesalEtapaCausaRepository } from './repositories/tipo-acto-procesal-etapa-causa.repository';

@Injectable()
export class TiposActosProcesalesEtapasCausasService {
  constructor(
    @Inject(TipoActoProcesalEtapaCausaRepository)
    private readonly tipoActoProcesalEtapaCausaRepository: TipoActoProcesalEtapaCausaRepository,
  ) {}

  async findAll() {
    return await this.tipoActoProcesalEtapaCausaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tipoActoProcesalEtapaCausaRepository.findOneById(id);
  }
}
