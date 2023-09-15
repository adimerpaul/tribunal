import { Inject, Injectable } from '@nestjs/common';
import { TipoRiesgoProcesalRepository } from './repositories/tipo-riesgo-procesal.repository';

@Injectable()
export class TiposRiesgosProcesalesService {
  constructor(
    @Inject(TipoRiesgoProcesalRepository)
    private readonly tiposRiesgosProcesalesRepository: TipoRiesgoProcesalRepository,
  ) {}
  async findAll() {
    return await this.tiposRiesgosProcesalesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposRiesgosProcesalesRepository.findOneById(id);
  }
}
