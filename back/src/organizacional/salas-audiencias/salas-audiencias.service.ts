import { Inject, Injectable } from '@nestjs/common';
import { SalaAudienciaRepository } from './repositories/salas-audiencias.repository';

@Injectable()
export class SalasAudienciasService {
  constructor(
    @Inject(SalaAudienciaRepository)
    private readonly salaAudienciaRepository: SalaAudienciaRepository,
  ) {}
  async findAll() {
    return await this.salaAudienciaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.salaAudienciaRepository.findOneById(id);
  }
}
