import { Inject, Injectable } from '@nestjs/common';
import { TipoEtapaCausaRepository } from './repositories/tipo-etapa-causa.repository';

@Injectable()
export class TiposEtapasCausasService {
  constructor(
    @Inject(TipoEtapaCausaRepository)
    private readonly tipoEtapaCausaRepository: TipoEtapaCausaRepository,
  ) {}

  async findAll() {
    return await this.tipoEtapaCausaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tipoEtapaCausaRepository.findOneById(id);
  }
}
