import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import GrupoDelito from '../entities/grupos-delito.entity';

@Injectable()
export class GrupoDelitoRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<GrupoDelito[]> {
    return this.dataSource.getRepository(GrupoDelito).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<GrupoDelito> {
    return this.dataSource.getRepository(GrupoDelito).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
