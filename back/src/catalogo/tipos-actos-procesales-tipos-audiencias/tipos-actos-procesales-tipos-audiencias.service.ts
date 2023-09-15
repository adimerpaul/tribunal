import { Inject, Injectable } from '@nestjs/common';
import { TipoActoProcesalTipoAudienciaRepository } from './repositories/tipo-acto-procesal-tipo-audiencia.repository';

@Injectable()
export class TiposActosProcesalesTiposAudienciasService {
  constructor(
    @Inject(TipoActoProcesalTipoAudienciaRepository)
    private readonly tipoActoProcesalTipoAudienciaRepository: TipoActoProcesalTipoAudienciaRepository,
  ) {}
  async findAll() {
    return await this.tipoActoProcesalTipoAudienciaRepository.findAll();
  }
  async findOne(id: number) {
    return await this.tipoActoProcesalTipoAudienciaRepository.findOneById(id);
  }
}
