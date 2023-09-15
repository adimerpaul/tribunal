import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import TipoActoProcesalEtapaCausa from '../entities/tipos-actos-procesales-etapas-causa.entity';
import { estadoConst } from 'src/common/constants/estado.constant';

@Injectable()
export class TipoActoProcesalEtapaCausaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoActoProcesalEtapaCausa[]> {
    return this.dataSource.getRepository(TipoActoProcesalEtapaCausa).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoActoProcesalEtapaCausa> {
    return this.dataSource.getRepository(TipoActoProcesalEtapaCausa).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
