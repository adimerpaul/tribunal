import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import SalaAudiencia from '../entities/sala-audiencia.entity';

@Injectable()
export class SalaAudienciaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<SalaAudiencia[]> {
    return this.dataSource.getRepository(SalaAudiencia).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<SalaAudiencia> {
    return this.dataSource.getRepository(SalaAudiencia).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
