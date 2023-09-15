import { Injectable } from '@nestjs/common';
import { DataSource, ILike } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import Departamento from '../entities/departamento.entity';

@Injectable()
export class DepartamentoRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Departamento[]> {
    return this.dataSource.getRepository(Departamento).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Departamento> {
    return this.dataSource.getRepository(Departamento).findOneBy({ id, estado: estadoConst.ACTIVO });
  }

  async findOneByDescripcion(descripcion: string): Promise<Departamento> {
    return this.dataSource
      .getRepository(Departamento)
      .findOneBy({ descripcion: ILike(`%${descripcion}%`), estado: estadoConst.ACTIVO });
  }
}
