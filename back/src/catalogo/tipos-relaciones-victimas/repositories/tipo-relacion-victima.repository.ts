import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoRelacionVictima from '../entities/tipo-relacion-victima.entity';

@Injectable()
export class TipoRelacionVictimaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoRelacionVictima[]> {
    return this.dataSource.getRepository(TipoRelacionVictima).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoRelacionVictima> {
    return this.dataSource.getRepository(TipoRelacionVictima).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
