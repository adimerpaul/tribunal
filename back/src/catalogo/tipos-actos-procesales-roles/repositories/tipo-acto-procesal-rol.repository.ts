import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import TipoActoProcesalRol from '../entities/tipos-acto-procesal-rol.entity';
import { estadoConst } from 'src/common/constants/estado.constant';

@Injectable()
export class TipoActoProcesalRolRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoActoProcesalRol[]> {
    return this.dataSource.getRepository(TipoActoProcesalRol).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoActoProcesalRol> {
    return this.dataSource.getRepository(TipoActoProcesalRol).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
