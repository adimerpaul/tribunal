import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import { Genero } from '../entities/genero.entity';

@Injectable()
export class GeneroRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Genero[]> {
    return this.dataSource.getRepository(Genero).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Genero> {
    return this.dataSource.getRepository(Genero).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
