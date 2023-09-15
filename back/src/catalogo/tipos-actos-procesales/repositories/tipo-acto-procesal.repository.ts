import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import TipoActoProcesal from '../entities/tipo-acto-procesal.entity';
import { estadoConst } from 'src/common/constants/estado.constant';
import { CreateTipoActoProcesalDto } from '../dto/create-tipo-acto-procesal.dto';
import { MessageEnum } from 'src/common/constants/message.enum';

@Injectable()
export class TipoActoProcesalRepository {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<TipoActoProcesal[]> {
    return this.dataSource.getRepository(TipoActoProcesal).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoActoProcesal> {
    return this.dataSource.getRepository(TipoActoProcesal).findOneBy({ id, estado: estadoConst.ACTIVO });
  }

  async create(tipoActoProcesal: CreateTipoActoProcesalDto) {
    console.log('tipoActoProcesal::', typeof tipoActoProcesal.descripcion);
    const item = await this.dataSource.getRepository(TipoActoProcesal).findOneBy({
      descripcion: tipoActoProcesal.descripcion,
    });
    if (!item) {
      const nuevoTipoActoProcesal = new TipoActoProcesal();
      Object.assign(nuevoTipoActoProcesal, tipoActoProcesal);
      return this.dataSource.getRepository(TipoActoProcesal).save(nuevoTipoActoProcesal);
    } else {
      throw new ConflictException({
        message: MessageEnum.EXIST,
        data: null,
      });
    }
  }

  async remove(id: number): Promise<number> {
    const existeItem = await this.dataSource.getTreeRepository(TipoActoProcesal).findOneBy({ id: id });
    if (!existeItem)
      throw new NotFoundException({
        message: MessageEnum.NOT_EXIST,
        data: null,
      });
    return (await this.dataSource.getRepository(TipoActoProcesal).save({ id, estado: estadoConst.ELIMINADO })).id;
  }
}
