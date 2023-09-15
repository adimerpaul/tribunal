import { Inject, Injectable } from '@nestjs/common';
import { ProvinciaRepository } from './repositories/provincia.repository';

@Injectable()
export class ProvinciasService {
  constructor(
    @Inject(ProvinciaRepository)
    private readonly provinciaRepository: ProvinciaRepository,
  ) {}
  async findAll() {
    return await this.provinciaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.provinciaRepository.findOneById(id);
  }
}
