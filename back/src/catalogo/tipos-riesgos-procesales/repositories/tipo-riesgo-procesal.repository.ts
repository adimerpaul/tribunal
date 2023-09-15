import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoRiesgoProcesal from '../entities/tipo-riesgo-procesal.entity';

@Injectable()
export class TipoRiesgoProcesalRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoRiesgoProcesal[]> {
    return this.dataSource.getRepository(TipoRiesgoProcesal).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoRiesgoProcesal> {
    return this.dataSource.getRepository(TipoRiesgoProcesal).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
