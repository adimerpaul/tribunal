import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import OficinaFiscalia from '../entities/oficinas-fiscalia.entity';

@Injectable()
export class OficinaFiscaliaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<OficinaFiscalia[]> {
    return this.dataSource.getRepository(OficinaFiscalia).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<OficinaFiscalia> {
    return this.dataSource.getRepository(OficinaFiscalia).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
