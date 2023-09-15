import { Inject, Injectable } from '@nestjs/common';
import { TipoRelacionVictimaRepository } from './repositories/tipo-relacion-victima.repository';

@Injectable()
export class TiposRelacionesVictimasService {
  constructor(
    @Inject(TipoRelacionVictimaRepository)
    private readonly tiposRelacionesVictimasRepository: TipoRelacionVictimaRepository,
  ) {}
  async findAll() {
    return await this.tiposRelacionesVictimasRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposRelacionesVictimasRepository.findOneById(id);
  }
}
