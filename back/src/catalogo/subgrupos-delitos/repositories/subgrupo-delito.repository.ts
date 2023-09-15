import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import SubgrupoDelito from '../entities/subgrupos-delito.entity';

@Injectable()
export class SubGrupoDelitoRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<SubgrupoDelito[]> {
    return this.dataSource.getRepository(SubgrupoDelito).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<SubgrupoDelito> {
    return this.dataSource.getRepository(SubgrupoDelito).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
