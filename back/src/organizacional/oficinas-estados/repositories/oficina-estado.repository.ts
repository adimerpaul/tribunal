import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import OficinaEstado from '../entities/oficinas-estado.entity';

@Injectable()
export class OficinaEstadoRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<OficinaEstado[]> {
    return this.dataSource.getRepository(OficinaEstado).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<OficinaEstado> {
    return this.dataSource.getRepository(OficinaEstado).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
