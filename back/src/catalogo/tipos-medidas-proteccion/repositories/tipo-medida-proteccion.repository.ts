import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import TipoMedidaProteccion from '../entities/tipo-medida-proteccion.entity';

@Injectable()
export class TipoMedidaProteccionRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoMedidaProteccion[]> {
    return this.dataSource.getRepository(TipoMedidaProteccion).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoMedidaProteccion> {
    return this.dataSource.getRepository(TipoMedidaProteccion).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
