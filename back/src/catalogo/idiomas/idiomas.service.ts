import { Inject, Injectable } from '@nestjs/common';
import { IdiomaRepository } from './repositories/idioma.repository';

@Injectable()
export class IdiomasService {
  constructor(
    @Inject(IdiomaRepository)
    private readonly idiomaRepository: IdiomaRepository,
  ) {}
  async findAll() {
    return await this.idiomaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.idiomaRepository.findOneById(id);
  }
}
