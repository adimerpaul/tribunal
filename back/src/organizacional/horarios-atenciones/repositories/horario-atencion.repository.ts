import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import HorarioAtencion from '../entities/horario-atencion.entity';

@Injectable()
export class HorarioAtencionRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<HorarioAtencion[]> {
    return this.dataSource.getRepository(HorarioAtencion).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<HorarioAtencion> {
    return this.dataSource.getRepository(HorarioAtencion).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
