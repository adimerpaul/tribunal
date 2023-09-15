import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoIdentidad from '../entities/tipo-identidad.entity';

@Injectable()
export class TipoIdentidadRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoIdentidad[]> {
    return this.dataSource.getRepository(TipoIdentidad).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoIdentidad> {
    return this.dataSource.getRepository(TipoIdentidad).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
