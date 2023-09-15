import { Inject, Injectable } from '@nestjs/common';
import { CompetenciaTerritorialRepository } from './repositories/competencia-territorial.repository';

@Injectable()
export class CompetenciasTerritorialesService {
  constructor(
    @Inject(CompetenciaTerritorialRepository)
    private readonly competenciaTerritorialRepository: CompetenciaTerritorialRepository,
  ) {}
  async findAll() {
    return await this.competenciaTerritorialRepository.findAll();
  }

  async findOne(id: number) {
    return await this.competenciaTerritorialRepository.findOneById(id);
  }
}
