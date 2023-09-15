import { Inject, Injectable } from '@nestjs/common';
import { SubGrupoDelitoRepository } from './repositories/subgrupo-delito.repository';

@Injectable()
export class SubGrupoDelitosService {
  constructor(
    @Inject(SubGrupoDelitoRepository)
    private readonly subGrupoDelitoRepository: SubGrupoDelitoRepository,
  ) {}
  async findAll() {
    return await this.subGrupoDelitoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.subGrupoDelitoRepository.findOneById(id);
  }
}
