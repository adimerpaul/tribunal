import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import TipoActoProcesalTipoAudiencia from '../entities/tipos-actos-procesales-tipos-audiencia.entity';
import { estadoConst } from 'src/common/constants/estado.constant';

@Injectable()
export class TipoActoProcesalTipoAudienciaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoActoProcesalTipoAudiencia[]> {
    return this.dataSource.getRepository(TipoActoProcesalTipoAudiencia).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoActoProcesalTipoAudiencia> {
    return this.dataSource.getRepository(TipoActoProcesalTipoAudiencia).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
