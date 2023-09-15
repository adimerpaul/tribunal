import { Inject, Injectable } from '@nestjs/common';
import { SalaAudienciaOficinaRepository } from './repositories/salas-audiencias-oficinas.repository';

@Injectable()
export class SalasAudienciasOficinasService {
  constructor(
    @Inject(SalaAudienciaOficinaRepository)
    private readonly salaAudienciaOficinaRepositoryRepository: SalaAudienciaOficinaRepository,
  ) {}
  async findAll() {
    return await this.salaAudienciaOficinaRepositoryRepository.findAll();
  }

  async findOne(id: number) {
    return await this.salaAudienciaOficinaRepositoryRepository.findOneById(id);
  }
}
