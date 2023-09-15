import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import CompetenciaDelito from '../entities/competencias-delito.entity';

@Injectable()
export class CompetenciasDelitosRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<CompetenciaDelito[]> {
    return this.dataSource.getRepository(CompetenciaDelito).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<CompetenciaDelito> {
    return this.dataSource.getRepository(CompetenciaDelito).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
