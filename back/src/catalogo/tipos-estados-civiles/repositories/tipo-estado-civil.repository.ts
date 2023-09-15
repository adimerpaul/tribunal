import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoEstadoCivil from '../entities/tipo-estado-civil.entity';

@Injectable()
export class TipoEstadoCivilRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoEstadoCivil[]> {
    return this.dataSource.getRepository(TipoEstadoCivil).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoEstadoCivil> {
    return this.dataSource.getRepository(TipoEstadoCivil).findOneBy({ id, estado: estadoConst.ACTIVO });
  }

  async findOneByDescripcion(descripcion: string): Promise<TipoEstadoCivil> {
    return await this.dataSource
      .getRepository(TipoEstadoCivil)
      .createQueryBuilder('tipoEstadoCivil')
      .where(`UNACCENT(tipoEstadoCivil.descripcion) ILIKE UNACCENT(:descripcion)`, {
        descripcion: `%${descripcion}%`,
      })
      .andWhere('tipoEstadoCivil.estado = :estado', {
        estado: estadoConst.ACTIVO,
      })
      .select(['tipoEstadoCivil'])
      .getOne();
  }
}
