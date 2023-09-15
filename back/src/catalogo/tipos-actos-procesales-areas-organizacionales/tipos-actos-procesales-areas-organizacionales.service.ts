import { Inject, Injectable } from '@nestjs/common';
import { TipoActoProcesalAreaOrganizacionalRepository } from './repositories/tipo-acto-procesal-area-organizacional.repository';

@Injectable()
export class TiposActosProcesalesAreasOrganizacionalesService {
  constructor(
    @Inject(TipoActoProcesalAreaOrganizacionalRepository)
    private readonly tipoActoProcesalAreaOrganizacionalRepository: TipoActoProcesalAreaOrganizacionalRepository,
  ) {}

  async findAll() {
    return await this.tipoActoProcesalAreaOrganizacionalRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tipoActoProcesalAreaOrganizacionalRepository.findOneById(id);
  }
}
