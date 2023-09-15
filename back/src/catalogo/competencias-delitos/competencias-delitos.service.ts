import { Inject, Injectable } from '@nestjs/common';
import { CompetenciasDelitosRepository } from './repositories/competencia-delito.repository';

@Injectable()
export class CompetenciasDelitosService {
  constructor(
    @Inject(CompetenciasDelitosRepository)
    private readonly competenciasDelitosRepository: CompetenciasDelitosRepository,
  ) {}
  async findAll() {
    return await this.competenciasDelitosRepository.findAll();
  }

  async findOne(id: number) {
    return await this.competenciasDelitosRepository.findOneById(id);
  }
}
