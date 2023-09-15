import { Inject, Injectable } from '@nestjs/common';
import { OficinaEstadoRepository } from './repositories/oficina-estado.repository';

@Injectable()
export class OficinasEstadosService {
  constructor(
    @Inject(OficinaEstadoRepository)
    private readonly oficinaEstadoRepository: OficinaEstadoRepository,
  ) {}
  async findAll() {
    return await this.oficinaEstadoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.oficinaEstadoRepository.findOneById(id);
  }
}
