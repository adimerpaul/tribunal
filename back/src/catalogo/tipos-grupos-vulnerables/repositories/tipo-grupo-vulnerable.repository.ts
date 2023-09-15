import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoGrupoVulnerable from '../entities/tipo-grupo-vulnerable.entity';

@Injectable()
export class TipoGrupoVulnerableRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoGrupoVulnerable[]> {
    return this.dataSource.getRepository(TipoGrupoVulnerable).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoGrupoVulnerable> {
    return this.dataSource.getRepository(TipoGrupoVulnerable).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
