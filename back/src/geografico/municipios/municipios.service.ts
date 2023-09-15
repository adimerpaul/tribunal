import { Inject, Injectable } from '@nestjs/common';
import { MunicipioRepository } from './repositories/municipio.repository';

@Injectable()
export class MunicipiosService {
  constructor(
    @Inject(MunicipioRepository)
    private readonly municipioRepository: MunicipioRepository,
  ) {}
  async findAll() {
    return await this.municipioRepository.findAll();
  }

  async findOne(id: number) {
    return await this.municipioRepository.findOneById(id);
  }
}
