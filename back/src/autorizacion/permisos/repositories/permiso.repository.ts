import { Injectable } from '@nestjs/common/decorators';
import { DataSource } from 'typeorm';
import { PermisoEntity } from '../entities/permiso.entity';
import { CreatePermisoDto } from '../dto/create-permiso.dto';
import { BadRequestException, ConflictException } from '@nestjs/common';
import { UpdatePermisoDto } from '../dto/update-permiso.dto';
import { MessageEnum } from 'src/common/constants/message.enum';
import { estadoConst } from 'src/common/constants/estado.constant';
import { CreateRolPermisoDto } from 'src/autorizacion/roles/dto/create-rol-permiso-dto';
import { RolPermisoEntity } from '../entities/rol-permiso.entity';
import { TipoConst } from '../constants/tipo.constant';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { paginateQuery } from 'src/common/querys/pagination.guery';

@Injectable()
export class PermisoRepository {
  constructor(private dataSource: DataSource) {}

  async create(createPermisoDto: CreatePermisoDto) {
    const existePermiso = await this.findOneByPath(
      createPermisoDto.accion,
      createPermisoDto.path,
      createPermisoDto.tipo,
    );

    if (existePermiso) {
      throw new ConflictException({
        message: MessageEnum.EXIST,
        data: null,
      });
    }

    const nuevoPermiso = new PermisoEntity();
    Object.assign(nuevoPermiso, createPermisoDto);

    return this.dataSource
      .getRepository(PermisoEntity)
      .save(nuevoPermiso)
      .catch(e => {
        throw new ConflictException({
          message: MessageEnum.BAD_REQUEST,
          data: e.message,
        });
      });
  }

  async findOneByPath(tipo: string, path: string, accion: string): Promise<PermisoEntity> {
    return await this.dataSource
      .getRepository(PermisoEntity)
      .createQueryBuilder('permisos')
      .where('permisos.tipo = :tipo', { tipo })
      .where('permisos.path = :path', { path })
      .where('permisos.accion = :accion', { accion })
      .getOne();
  }

  async findAll(options: PaginationDto): Promise<any> {
    const res = this.dataSource
      .getRepository(PermisoEntity)
      .createQueryBuilder('permisos')
      .where('permisos.estado = :estado', { estado: estadoConst.ACTIVO });
    return paginateQuery(res, options);
  }

  async findOne(id: number): Promise<PermisoEntity> {
    return this.dataSource.getRepository(PermisoEntity).findOneBy({ id });
  }

  async update(id: number, updatePermisoDto: UpdatePermisoDto) {
    const permisoExiste = await this.findOne(id);
    if (!permisoExiste) {
      throw new BadRequestException({
        message: MessageEnum.NOT_EXIST,
        data: null,
      });
    }

    const mergedPermiso = { ...permisoExiste[0], ...updatePermisoDto };

    await this.dataSource
      .createQueryBuilder()
      .update(PermisoEntity)
      .set(updatePermisoDto)
      .where('id = :id', { id })
      .execute();
    return mergedPermiso;
  }

  async delete(id: number) {
    const permisoExiste = await this.findOne(id);

    if (!permisoExiste) {
      throw new BadRequestException('El permiso no existe');
    }

    await this.dataSource
      .createQueryBuilder()
      .update(PermisoEntity)
      .set({ estado: estadoConst.ELIMINADO })
      .where('id = :id', { id })
      .execute();
    return id;
  }

  async findPermisosbyIdRol(idRol: number): Promise<PermisoEntity[]> {
    const response = await this.dataSource
      .getRepository(PermisoEntity)
      .createQueryBuilder('permisos')
      .innerJoin('permisos.rolesPermiso', 'rolesPermiso', 'rolesPermiso.estado = :estado', {
        estado: estadoConst.ACTIVO,
      })
      .innerJoin('rolesPermiso.rol', 'rol', 'rol.estado = :estado', {
        estado: estadoConst.ACTIVO,
      })
      .where('rol.id = :idRol', { idRol })
      .getMany();
    return response;
  }

  async createRolPermiso(createRolMenuDto: CreateRolPermisoDto): Promise<number> {
    const existe = await this.dataSource.getRepository(RolPermisoEntity).findOneBy({
      idRol: createRolMenuDto.idRol,
      idPermiso: createRolMenuDto.idPermiso,
      estado: estadoConst.ACTIVO,
    });
    if (existe)
      throw new ConflictException({
        message: MessageEnum.EXIST,
        data: null,
      });
    const nuevoRolPermiso = new RolPermisoEntity();
    nuevoRolPermiso.idRol = createRolMenuDto.idRol;
    nuevoRolPermiso.idPermiso = createRolMenuDto.idPermiso;
    const respuesta = await this.dataSource.getRepository(RolPermisoEntity).save(nuevoRolPermiso);
    return respuesta.id;
  }
  async deleteRolPermiso(idRol: number, idPermiso: number) {
    return await this.dataSource
      .getRepository(RolPermisoEntity)
      .createQueryBuilder()
      .update(RolPermisoEntity)
      .set({
        estado: estadoConst.ELIMINADO,
      })
      .where('idMenu = :idMenu', { idPermiso })
      .andWhere('idRol = :idRol', { idRol })
      .andWhere('estado = :estado', { estado: estadoConst.ACTIVO })
      .execute();
  }
  async getUsuarioPermisos(usuario: string, accion: string): Promise<PermisoEntity[]> {
    return await this.dataSource
      .getRepository(PermisoEntity)
      .createQueryBuilder('permisos')
      .innerJoin('permisos.rolesPermiso', 'rolesPermiso', 'rolesPermiso.estado = :estado', {
        estado: estadoConst.ACTIVO,
      })
      .innerJoin('rolesPermiso.rol', 'rol', 'rol.estado = :estado', {
        estado: estadoConst.ACTIVO,
      })
      .innerJoin('rol.usuariosRol', 'usuariosRol', 'usuariosRol.estado = :estado', { estado: estadoConst.ACTIVO })
      .innerJoin('usuariosRol.usuario', 'usuario', 'usuario.estado = :estado', {
        estado: estadoConst.ACTIVO,
      })
      .where('usuario.usuario = :usuario', { usuario })
      .andWhere('permisos.accion = :accion', { accion })
      .andWhere('permisos.tipo = :tipo', { tipo: TipoConst.BACKEND })
      .andWhere('permisos.estado = :estado', { estado: estadoConst.ACTIVO })
      .getMany();
  }
}
