import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import Oficina from '../entities/oficina.entity';

@Injectable()
export class OficinaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Oficina[]> {
    return this.dataSource.getRepository(Oficina).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Oficina> {
    return this.dataSource.getRepository(Oficina).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
