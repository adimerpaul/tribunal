import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoSeguimiento from '../entities/tipo-seguimiento.entity';

@Injectable()
export class TipoSeguimientoRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoSeguimiento[]> {
    return this.dataSource.getRepository(TipoSeguimiento).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoSeguimiento> {
    return this.dataSource.getRepository(TipoSeguimiento).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
