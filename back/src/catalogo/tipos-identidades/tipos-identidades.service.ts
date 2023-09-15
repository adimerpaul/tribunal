import { Inject, Injectable } from '@nestjs/common';
import { TipoIdentidadRepository } from './repositories/tipo-identidad.repository';

@Injectable()
export class TiposIdentidadesService {
  constructor(
    @Inject(TipoIdentidadRepository)
    private readonly tiposIdentidadesRepository: TipoIdentidadRepository,
  ) {}
  async findAll() {
    return await this.tiposIdentidadesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposIdentidadesRepository.findOneById(id);
  }
}
