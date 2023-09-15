import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import Delito from '../entities/delito.entity';

@Injectable()
export class DelitoRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Delito[]> {
    return this.dataSource.getRepository(Delito).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Delito> {
    return this.dataSource.getRepository(Delito).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
