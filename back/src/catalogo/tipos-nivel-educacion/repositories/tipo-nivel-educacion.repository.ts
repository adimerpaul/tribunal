import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoNivelEducacion from '../entities/tipos-nivel-educacion.entity';

@Injectable()
export class TipoNivelEducacionRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoNivelEducacion[]> {
    return this.dataSource.getRepository(TipoNivelEducacion).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoNivelEducacion> {
    return this.dataSource.getRepository(TipoNivelEducacion).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
