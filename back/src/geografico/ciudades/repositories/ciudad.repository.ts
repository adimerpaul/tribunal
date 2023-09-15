import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import Ciudad from '../entities/ciudad.entity';

@Injectable()
export class CiudadRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Ciudad[]> {
    return this.dataSource.getRepository(Ciudad).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Ciudad> {
    return this.dataSource.getRepository(Ciudad).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
