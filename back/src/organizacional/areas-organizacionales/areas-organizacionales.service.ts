import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AreaOrganizacionalRepository } from './repositories/area-organizacional.repository';

@Injectable()
export class AreasOrganizacionalesService {
  constructor(
    @Inject(AreaOrganizacionalRepository)
    private readonly areaOrganizacionalRepository: AreaOrganizacionalRepository,
  ) {}
  async findAll() {
    return await this.areaOrganizacionalRepository.findAll();
  }

  async findOne(id: number) {
    const area = await this.areaOrganizacionalRepository.findOneById(id);
    if (!area) throw new NotFoundException(' No existe');
    return area;
  }
}
