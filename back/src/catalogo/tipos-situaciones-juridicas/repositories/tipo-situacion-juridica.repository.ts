import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoSituacionJuridica from '../entities/tipo-situacion-juridica.entity';

@Injectable()
export class TipoSituacionJuridicaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoSituacionJuridica[]> {
    return this.dataSource.getRepository(TipoSituacionJuridica).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoSituacionJuridica> {
    return this.dataSource.getRepository(TipoSituacionJuridica).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
