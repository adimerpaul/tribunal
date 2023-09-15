import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoPlantilla from '../entities/tipo-plantilla.entity';

@Injectable()
export class TipoPlantillaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoPlantilla[]> {
    return this.dataSource.getRepository(TipoPlantilla).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoPlantilla> {
    return this.dataSource.getRepository(TipoPlantilla).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
