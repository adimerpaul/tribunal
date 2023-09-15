import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoDenuncia from '../entities/tipo-denuncia.entity';

@Injectable()
export class TipoDenunciaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoDenuncia[]> {
    return this.dataSource.getRepository(TipoDenuncia).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoDenuncia> {
    return this.dataSource.getRepository(TipoDenuncia).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
