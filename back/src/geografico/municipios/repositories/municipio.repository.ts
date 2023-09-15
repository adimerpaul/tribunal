import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import Municipio from '../entities/municipio.entity';

@Injectable()
export class MunicipioRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Municipio[]> {
    return this.dataSource.getRepository(Municipio).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Municipio> {
    return this.dataSource.getRepository(Municipio).findOneBy({ id, estado: estadoConst.ACTIVO });
  }

  async findOneByDescripcion(descripcion: string): Promise<Municipio> {
    return await this.dataSource
      .getRepository(Municipio)
      .createQueryBuilder('municipio')
      .where(`UNACCENT(municipio.descripcion) ILIKE UNACCENT(:descripcion)`, {
        descripcion: `%${descripcion}%`,
      })
      .andWhere('municipio.estado = :estado', { estado: estadoConst.ACTIVO })
      .select(['municipio'])
      .getOne();
  }
}
