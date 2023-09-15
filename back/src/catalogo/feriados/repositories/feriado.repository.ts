import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import Feriado from '../entities/feriado.entity';

@Injectable()
export class FeriadoRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Feriado[]> {
    return this.dataSource.getRepository(Feriado).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Feriado> {
    return this.dataSource.getRepository(Feriado).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
