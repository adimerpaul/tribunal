import { Injectable } from '@nestjs/common';
import { estadoConst } from 'src/common/constants/estado.constant';
import { DataSource } from 'typeorm';
import ZonaNotificacionFuncionario from '../entities/zona-notificacione-funcionario.entity';

@Injectable()
export class ZonaNotificacionFuncionarioRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<ZonaNotificacionFuncionario[]> {
    return this.dataSource.getRepository(ZonaNotificacionFuncionario).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<ZonaNotificacionFuncionario> {
    return this.dataSource.getRepository(ZonaNotificacionFuncionario).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
