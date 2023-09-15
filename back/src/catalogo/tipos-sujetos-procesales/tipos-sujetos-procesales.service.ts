import { Inject, Injectable } from '@nestjs/common';
import { TipoSujetoprocesalRepository } from './repositories/tipo-sujeto-procesal.repository';

@Injectable()
export class TiposSujetosProcesalesService {
  constructor(
    @Inject(TipoSujetoprocesalRepository)
    private readonly TiposSujetosProcesalesRepository: TipoSujetoprocesalRepository,
  ) {}
  async findAll() {
    return await this.TiposSujetosProcesalesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.TiposSujetosProcesalesRepository.findOneById(id);
  }
}
