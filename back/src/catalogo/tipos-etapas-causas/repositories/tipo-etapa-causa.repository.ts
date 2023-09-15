import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import TipoEtapaCausa from '../entities/tipo-etapa-causa.entity';

@Injectable()
export class TipoEtapaCausaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoEtapaCausa[]> {
    return this.dataSource.getRepository(TipoEtapaCausa).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoEtapaCausa> {
    return this.dataSource.getRepository(TipoEtapaCausa).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
