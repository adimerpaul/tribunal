import { Inject, Injectable } from '@nestjs/common';
import { TipoGrupoVulnerableRepository } from './repositories/tipo-grupo-vulnerable.repository';

@Injectable()
export class TiposGruposVulnerablesService {
  constructor(
    @Inject(TipoGrupoVulnerableRepository)
    private readonly tiposGruposVulnerablesRepository: TipoGrupoVulnerableRepository,
  ) {}
  async findAll() {
    return await this.tiposGruposVulnerablesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tiposGruposVulnerablesRepository.findOneById(id);
  }
}
