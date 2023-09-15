import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoEstadoAudiencia from '../entities/tipo-estado-audiencia.entity';

@Injectable()
export class TipoEstadoAudienciaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoEstadoAudiencia[]> {
    return this.dataSource.getRepository(TipoEstadoAudiencia).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoEstadoAudiencia> {
    return this.dataSource.getRepository(TipoEstadoAudiencia).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
