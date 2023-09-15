import { Inject, Injectable } from '@nestjs/common';
import { TipoGradoDiscapacidadRepository } from './repositories/tipo-grado-discapacidad.repository';

@Injectable()
export class TiposGradosDiscapacidadesService {
  constructor(
    @Inject(TipoGradoDiscapacidadRepository)
    private readonly tiposGradosDiscapadidadesRepository: TipoGradoDiscapacidadRepository,
  ) {}
  async findAll() {
    return await this.tiposGradosDiscapadidadesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposGradosDiscapadidadesRepository.findOneById(id);
  }
}
