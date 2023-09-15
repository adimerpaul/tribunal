import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import { Materia } from '../entities/materia.entity';

@Injectable()
export class MateriaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<Materia[]> {
    return this.dataSource.getRepository(Materia).find({
      where: {
        estado: estadoConst.ACTIVO,
      },
    });
  }

  async findOneById(id: number): Promise<Materia> {
    return this.dataSource.getRepository(Materia).findOne({ where: { id, estado: estadoConst.ACTIVO } });
  }
}
