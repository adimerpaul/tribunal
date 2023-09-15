import { Inject, Injectable } from '@nestjs/common';
import { CompetenciaFiscaliaRepository } from './repositories/competencia-fiscalia.repository';

@Injectable()
export class CompetenciasFiscaliaService {
  constructor(
    @Inject(CompetenciaFiscaliaRepository)
    private readonly competenciaFiscaliaRepository: CompetenciaFiscaliaRepository,
  ) {}
  async findAll() {
    return await this.competenciaFiscaliaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.competenciaFiscaliaRepository.findOneById(id);
  }
}
