import { Inject, Injectable } from '@nestjs/common';
import { PaisRepository } from './repositories/pais.repository';

@Injectable()
export class PaisesService {
  constructor(
    @Inject(PaisRepository)
    private readonly paisRepository: PaisRepository,
  ) {}
  async findAll() {
    return await this.paisRepository.findAll();
  }

  async findOne(id: number) {
    return await this.paisRepository.findOneById(id);
  }
}
