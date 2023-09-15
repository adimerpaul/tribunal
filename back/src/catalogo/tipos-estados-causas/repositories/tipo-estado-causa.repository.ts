import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoEstadoCausa from '../entities/tipo-estado-causa.entity';

@Injectable()
export class TipoEstadoCausaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoEstadoCausa[]> {
    return this.dataSource.getRepository(TipoEstadoCausa).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoEstadoCausa> {
    return this.dataSource.getRepository(TipoEstadoCausa).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
