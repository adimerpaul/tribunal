import { Injectable, Inject } from '@nestjs/common';
import { TipoSituacionJuridicaRepository } from './repositories/tipo-situacion-juridica.repository';

@Injectable()
export class TiposSituacionesJuridicasService {
  constructor(
    @Inject(TipoSituacionJuridicaRepository)
    private readonly tiposSituacionesJuridicasRepository: TipoSituacionJuridicaRepository,
  ) {}
  async findAll() {
    return await this.tiposSituacionesJuridicasRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposSituacionesJuridicasRepository.findOneById(id);
  }
}
