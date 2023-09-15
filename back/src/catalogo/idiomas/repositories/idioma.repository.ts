import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import Idioma from '../entities/idioma.entity';

@Injectable()
export class IdiomaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Idioma[]> {
    return this.dataSource.getRepository(Idioma).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<Idioma> {
    return this.dataSource.getRepository(Idioma).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
