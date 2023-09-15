import { Inject, Injectable } from '@nestjs/common';
import { DepartamentoRepository } from './repositories/departamento.repository';

@Injectable()
export class DepartamentosService {
  constructor(
    @Inject(DepartamentoRepository)
    private readonly departamentoRepository: DepartamentoRepository,
  ) {}
  async findAll() {
    return await this.departamentoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.departamentoRepository.findOneById(id);
  }
}
