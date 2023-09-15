import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoGradoDiscapacidad from '../entities/tipo-grado-discapacidad.entity';

@Injectable()
export class TipoGradoDiscapacidadRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoGradoDiscapacidad[]> {
    return this.dataSource.getRepository(TipoGradoDiscapacidad).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoGradoDiscapacidad> {
    return this.dataSource.getRepository(TipoGradoDiscapacidad).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
