import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';

import Pais from '../entities/pais.entity';

@Injectable()
export class PaisRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Pais[]> {
    return this.dataSource.getRepository(Pais).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Pais> {
    return this.dataSource.getRepository(Pais).findOneBy({ id, estado: estadoConst.ACTIVO });
  }

  async findOneByDescripcion(descripcion: string): Promise<Pais> {
    return await this.dataSource
      .getRepository(Pais)
      .createQueryBuilder('pais')
      .where(`UNACCENT(pais.descripcion) ILIKE (:descripcion)`, {
        descripcion: `%${descripcion}%`,
      })
      .andWhere('pais.estado = :estado', { estado: estadoConst.ACTIVO })
      .select(['pais.descripcion'])
      .getOne();
  }
}
