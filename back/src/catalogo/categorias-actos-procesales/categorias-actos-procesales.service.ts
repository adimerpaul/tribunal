import { Inject, Injectable } from '@nestjs/common';
import { CategoriaActoProcesalRepository } from './repositories/categoria-acto-procesal.repository';

@Injectable()
export class CategoriasActosProcesalesService {
  constructor(
    @Inject(CategoriaActoProcesalRepository)
    private readonly categoriaActoProcesalRepository: CategoriaActoProcesalRepository,
  ) {}

  async findAll() {
    return await this.categoriaActoProcesalRepository.findAll();
  }

  async findOne(id: number) {
    return await this.categoriaActoProcesalRepository.findOneById(id);
  }
}
