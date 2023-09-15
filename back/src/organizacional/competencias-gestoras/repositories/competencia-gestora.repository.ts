import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import CompetenciaGestora from '../entities/competencia-gestora.entity';

@Injectable()
export class CompetenciaGestoraRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<CompetenciaGestora[]> {
    return this.dataSource.getRepository(CompetenciaGestora).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<CompetenciaGestora> {
    return this.dataSource.getRepository(CompetenciaGestora).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
