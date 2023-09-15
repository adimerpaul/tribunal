import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CompetenciaOrganizacionalRepository } from './repositories/competencia-organizacional.repository';

@Injectable()
export class CompetenciasOrganizacionalesService {
  constructor(
    @Inject(CompetenciaOrganizacionalRepository)
    private competenciaOrganizacionalRepository: CompetenciaOrganizacionalRepository,
  ) {}

  async findAll() {
    return await this.competenciaOrganizacionalRepository.findAll();
  }

  async findOne(id: number) {
    const compe = await this.competenciaOrganizacionalRepository.findOneById(id);
    if (!compe) throw new NotFoundException(' No existe');
    return compe;
  }
}
