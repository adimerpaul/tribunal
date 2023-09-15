import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoNotificacion from '../entities/tipo-notificacion.entity';

@Injectable()
export class TipoNotificacionRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoNotificacion[]> {
    return this.dataSource.getRepository(TipoNotificacion).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoNotificacion> {
    return this.dataSource.getRepository(TipoNotificacion).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
