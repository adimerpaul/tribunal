import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import CompetenciaTerritorial from '../entities/competencia-territorial.entity';

@Injectable()
export class CompetenciaTerritorialRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<CompetenciaTerritorial[]> {
    return this.dataSource.getRepository(CompetenciaTerritorial).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<CompetenciaTerritorial> {
    return this.dataSource.getRepository(CompetenciaTerritorial).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
