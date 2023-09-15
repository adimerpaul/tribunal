import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoSuspencionAudiencia from '../entities/tipo-suspension-audiencia.entity';

@Injectable()
export class TipoSuspensionAudienciaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoSuspencionAudiencia[]> {
    return this.dataSource.getRepository(TipoSuspencionAudiencia).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoSuspencionAudiencia> {
    return this.dataSource.getRepository(TipoSuspencionAudiencia).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
