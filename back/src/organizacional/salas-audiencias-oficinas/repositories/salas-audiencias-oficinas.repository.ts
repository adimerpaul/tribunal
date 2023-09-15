import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import SalaAudienciaOficina from '../entities/salas-audiencias-oficina.entity';

@Injectable()
export class SalaAudienciaOficinaRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<SalaAudienciaOficina[]> {
    return this.dataSource.getRepository(SalaAudienciaOficina).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<SalaAudienciaOficina> {
    return this.dataSource.getRepository(SalaAudienciaOficina).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
