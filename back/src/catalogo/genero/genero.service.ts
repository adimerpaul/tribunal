import { Inject, Injectable } from '@nestjs/common';
import { GeneroRepository } from './repositories/genero.repository';

@Injectable()
export class GeneroService {
  constructor(
    @Inject(GeneroRepository)
    private readonly generoRepository: GeneroRepository,
  ) {}
  async findAll() {
    return await this.generoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.generoRepository.findOneById(id);
  }
}
