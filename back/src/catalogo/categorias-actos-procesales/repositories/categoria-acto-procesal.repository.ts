import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import CategoriaActoProcesal from '../entities/categoria-acto-procesal.entity';
import { estadoConst } from 'src/common/constants/estado.constant';

@Injectable()
export class CategoriaActoProcesalRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<CategoriaActoProcesal[]> {
    return this.dataSource.getRepository(CategoriaActoProcesal).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<CategoriaActoProcesal> {
    return this.dataSource.getRepository(CategoriaActoProcesal).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
