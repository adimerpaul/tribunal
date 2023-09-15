import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';

import Provincia from '../entities/provincia.entity';

@Injectable()
export class ProvinciaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Provincia[]> {
    return this.dataSource.getRepository(Provincia).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Provincia> {
    return this.dataSource.getRepository(Provincia).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
