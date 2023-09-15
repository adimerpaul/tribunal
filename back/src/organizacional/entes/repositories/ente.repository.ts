import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import Ente from '../entities/ente.entity';
import { estadoConst } from 'src/common/constants/estado.constant';

@Injectable()
export class EnteRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Ente[]> {
    return this.dataSource.getRepository(Ente).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Ente> {
    return this.dataSource.getRepository(Ente).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
