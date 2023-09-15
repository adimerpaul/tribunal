import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { estadoConst } from 'src/common/constants/estado.constant';
import CompetenciaOrganizacional from '../entities/competencia-organizacional.entity';

@Injectable()
export class CompetenciaOrganizacionalRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<CompetenciaOrganizacional[]> {
    return this.dataSource.getRepository(CompetenciaOrganizacional).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<CompetenciaOrganizacional> {
    return this.dataSource.getRepository(CompetenciaOrganizacional).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
