import { Inject, Injectable } from '@nestjs/common';
import { GrupoDelitoRepository } from './repositories/grupo-delito.repository';

@Injectable()
export class GruposDelitosService {
  constructor(
    @Inject(GrupoDelitoRepository)
    private readonly grupoDelitoRepository: GrupoDelitoRepository,
  ) {}
  async findAll() {
    return await this.grupoDelitoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.grupoDelitoRepository.findOneById(id);
  }
}
