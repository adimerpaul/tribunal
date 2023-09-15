import { Inject, Injectable } from '@nestjs/common';
import { MateriaRepository } from './repositories/materia.repository';

@Injectable()
export class MateriasService {
  constructor(
    @Inject(MateriaRepository)
    private readonly materiasRepository: MateriaRepository,
  ) {}
  async findAll() {
    return await this.materiasRepository.findAll();
  }

  async findOne(id: number) {
    return await this.materiasRepository.findOneById(id);
  }
}
