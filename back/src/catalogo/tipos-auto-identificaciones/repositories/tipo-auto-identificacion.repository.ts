import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoAutoIdentificacion from '../entities/tipo-auto-identificacion.entity';

@Injectable()
export class TipoAutoIdentificacionRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoAutoIdentificacion[]> {
    return this.dataSource.getRepository(TipoAutoIdentificacion).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoAutoIdentificacion> {
    return this.dataSource.getRepository(TipoAutoIdentificacion).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
