import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import RecintoPenitenciario from '../entities/recinto-penitenciario.entity';

@Injectable()
export class RecintoPenitenciarioRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<RecintoPenitenciario[]> {
    return this.dataSource.getRepository(RecintoPenitenciario).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<RecintoPenitenciario> {
    return this.dataSource.getRepository(RecintoPenitenciario).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
