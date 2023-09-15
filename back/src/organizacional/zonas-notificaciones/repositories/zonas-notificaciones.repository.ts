import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import ZonaNotificacion from '../entities/zona-notificacion.entity';

@Injectable()
export class ZonaNotificacionRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<ZonaNotificacion[]> {
    return this.dataSource.getRepository(ZonaNotificacion).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<ZonaNotificacion> {
    return this.dataSource.getRepository(ZonaNotificacion).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
