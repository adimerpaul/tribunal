import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { estadoConst } from 'src/common/constants/estado.constant';
import DelitoDetalle from '../entities/delitos-detalle.entity';

@Injectable()
export class DelitosDetallesRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<DelitoDetalle[]> {
    return this.dataSource.getRepository(DelitoDetalle).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<DelitoDetalle> {
    return this.dataSource.getRepository(DelitoDetalle).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
}
