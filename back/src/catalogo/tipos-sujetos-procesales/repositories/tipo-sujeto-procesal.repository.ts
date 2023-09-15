import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoSujetoProcesal from '../entities/tipo-sujeto-procesal.entity';

@Injectable()
export class TipoSujetoprocesalRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoSujetoProcesal[]> {
    return this.dataSource.getRepository(TipoSujetoProcesal).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoSujetoProcesal> {
    return this.dataSource.getRepository(TipoSujetoProcesal).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
