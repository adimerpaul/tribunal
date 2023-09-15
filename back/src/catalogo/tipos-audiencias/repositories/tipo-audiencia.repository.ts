import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TipoAudiencia } from '../entities/tipos-audiencia.entity';
import { estadoConst } from 'src/common/constants/estado.constant';
import { CreateTipoAudienciaDto } from '../dtos/create-tipos-audiencias.dto';
import { MessageEnum } from 'src/common/constants/message.enum';
import { UpdateTipoAudienciaDto } from '../dtos/update-tipos-audiencia.dto';
import { exist } from 'joi';

@Injectable()
export class TipoAudienciaRepository {
  constructor(private dataSource: DataSource) {}

  async create(createTipoAudienciaDto: CreateTipoAudienciaDto): Promise<TipoAudiencia> {
    const existeTipoAudiencia = await this.findOneByCodigo(createTipoAudienciaDto.codigo);
    if (existeTipoAudiencia)
      throw new ConflictException({
        message: MessageEnum.EXIST,
        data: null,
      });
    const nuevoTipoAudiencia = new TipoAudiencia();
    Object.assign(nuevoTipoAudiencia, createTipoAudienciaDto);
    return this.dataSource.getRepository(TipoAudiencia).save(nuevoTipoAudiencia);
  }

  async findAll(): Promise<TipoAudiencia[]> {
    return await this.dataSource.getRepository(TipoAudiencia).findBy({ estado: estadoConst.ACTIVO });
  }

  async findOneByCodigo(codigo: number): Promise<TipoAudiencia> {
    return await this.dataSource.getRepository(TipoAudiencia).findOneBy({ codigo, estado: estadoConst.ACTIVO });
  }

  async findOneByDescripcion(descripcion: string): Promise<TipoAudiencia> {
    return await this.dataSource.getRepository(TipoAudiencia).findOneBy({ descripcion, estado: estadoConst.ACTIVO });
  }

  async findOneById(id: number): Promise<TipoAudiencia> {
    return this.dataSource.getRepository(TipoAudiencia).findOneBy({ id, estado: estadoConst.ACTIVO });
  }

  async update(id: number, updateTipoAudienciaDto: UpdateTipoAudienciaDto): Promise<TipoAudiencia> {
    const existeTipoAudiencia = await this.findOneById(id);
    if (!existeTipoAudiencia)
      throw new NotFoundException({
        message: MessageEnum.NOT_EXIST,
        data: null,
      });
    const tipoAudienciaUpdate = this.dataSource.getRepository(TipoAudiencia).create(updateTipoAudienciaDto);
    return await this.dataSource.getRepository(TipoAudiencia).save({ id, tipoAudienciaUpdate });
  }

  async delete(id: number) {
    const tipoAudienciaExiste = await this.findOneById(id);
    if (!tipoAudienciaExiste) {
      throw new BadRequestException({
        message: MessageEnum.NOT_EXIST,
        data: null,
      });
    }

    await this.dataSource
      .createQueryBuilder()
      .update(TipoAudiencia)
      .set({ estado: estadoConst.ELIMINADO })
      .where('id= :id', { id })
      .execute();
    return exist;
  }
}
