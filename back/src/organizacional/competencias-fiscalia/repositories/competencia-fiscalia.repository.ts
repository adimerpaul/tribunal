import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import CompetenciaFiscalia from '../entities/competencias-fiscalia.entity';

@Injectable()
export class CompetenciaFiscaliaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<CompetenciaFiscalia[]> {
    return this.dataSource.getRepository(CompetenciaFiscalia).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<CompetenciaFiscalia> {
    return this.dataSource.getRepository(CompetenciaFiscalia).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
