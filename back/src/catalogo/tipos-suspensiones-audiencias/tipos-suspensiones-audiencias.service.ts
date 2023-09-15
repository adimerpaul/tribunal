import { Inject, Injectable } from '@nestjs/common';
import { TipoSuspensionAudienciaRepository } from './repositories/tipo-suspension-audiencia.repository';

@Injectable()
export class TiposSuspensionesAudienciasService {
  constructor(
    @Inject(TipoSuspensionAudienciaRepository)
    private readonly tiposSuspensionesAudienciasRepository: TipoSuspensionAudienciaRepository,
  ) {}
  async findAll() {
    return await this.tiposSuspensionesAudienciasRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposSuspensionesAudienciasRepository.findOneById(id);
  }
}
