import { Inject, Injectable } from '@nestjs/common';
import { TipoPlantillaRepository } from './repositories/tipo-plantilla.repository';

@Injectable()
export class TipoPlantillaService {
  constructor(
    @Inject(TipoPlantillaRepository)
    private readonly tipoplantillaRepository: TipoPlantillaRepository,
  ) {}
  async findAll() {
    return await this.tipoplantillaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tipoplantillaRepository.findOneById(id);
  }
}
