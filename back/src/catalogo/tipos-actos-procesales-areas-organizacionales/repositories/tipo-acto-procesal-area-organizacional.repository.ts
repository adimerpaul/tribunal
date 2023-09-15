import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import TipoActoProcesalAreaOrganizacional from '../entities/tipos-actos-procesales-areas-organizacionale.entity';
import { estadoConst } from 'src/common/constants/estado.constant';

@Injectable()
export class TipoActoProcesalAreaOrganizacionalRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoActoProcesalAreaOrganizacional[]> {
    return this.dataSource.getRepository(TipoActoProcesalAreaOrganizacional).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoActoProcesalAreaOrganizacional> {
    return this.dataSource
      .getRepository(TipoActoProcesalAreaOrganizacional)
      .findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
