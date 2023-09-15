import { Inject, Injectable } from '@nestjs/common';
import { TipoEstadoCivilRepository } from './repositories/tipo-estado-civil.repository';

@Injectable()
export class TiposEstadosCivilesService {
  constructor(
    @Inject(TipoEstadoCivilRepository)
    private readonly tiposEstadosCivilesRepository: TipoEstadoCivilRepository,
  ) {}
  async findAll() {
    return await this.tiposEstadosCivilesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposEstadosCivilesRepository.findOneById(id);
  }
}
