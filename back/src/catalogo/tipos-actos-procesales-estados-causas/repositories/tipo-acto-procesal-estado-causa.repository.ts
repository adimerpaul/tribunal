import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import TipoActoProcesalEstadoCausa from '../entities/tipos-actos-procesales-estados-causa.entity';
import { estadoConst } from 'src/common/constants/estado.constant';

@Injectable()
export class TipoActoProcesalEstadoCausaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoActoProcesalEstadoCausa[]> {
    return this.dataSource.getRepository(TipoActoProcesalEstadoCausa).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoActoProcesalEstadoCausa> {
    return this.dataSource.getRepository(TipoActoProcesalEstadoCausa).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
