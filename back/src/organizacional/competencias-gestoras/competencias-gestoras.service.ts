import { Inject, Injectable } from '@nestjs/common';
import { CompetenciaGestoraRepository } from './repositories/competencia-gestora.repository';

@Injectable()
export class CompetenciasGestorasService {
  constructor(
    @Inject(CompetenciaGestoraRepository)
    private readonly competenciaRepository: CompetenciaGestoraRepository,
  ) {}
  async findAll() {
    return await this.competenciaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.competenciaRepository.findOneById(id);
  }
}
