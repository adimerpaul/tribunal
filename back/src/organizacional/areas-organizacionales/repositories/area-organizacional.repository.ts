import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import AreaOrganizacional from '../entities/area-organizacional.entity';

@Injectable()
export class AreaOrganizacionalRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<AreaOrganizacional[]> {
    return this.dataSource.getRepository(AreaOrganizacional).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<AreaOrganizacional> {
    return this.dataSource.getRepository(AreaOrganizacional).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
