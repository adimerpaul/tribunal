import { Inject, Injectable } from '@nestjs/common';
import { TipoEstadoAudienciaRepository } from './repositories/tipo-estado-audiencia.repository';

@Injectable()
export class TiposEstadosAudienciasService {
  constructor(
    @Inject(TipoEstadoAudienciaRepository)
    private readonly tipoEstadoAudienciaRepository: TipoEstadoAudienciaRepository,
  ) {}
  async findAll() {
    return await this.tipoEstadoAudienciaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tipoEstadoAudienciaRepository.findOneById(id);
  }
}
