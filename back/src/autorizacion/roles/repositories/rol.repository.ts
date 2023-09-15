import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioRolDto } from 'src/autorizacion/usuarios/dto/create-usuario-rol-dto';
import { estadoConst } from 'src/common/constants/estado.constant';
import { MessageEnum } from 'src/common/constants/message.enum';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { paginateQuery } from 'src/common/querys/pagination.guery';
import { DataSource } from 'typeorm';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RolEntity } from '../entities/rol.entity';
import { UsuarioRolEntity } from '../entities/usuario-rol.entity';

@Injectable()
export class RolRepository {
  constructor(private dataSource: DataSource) {}

  async create(createRolDto: CreateRoleDto): Promise<RolEntity> {
    const existeRol = await this.findOneByCodigoNombre(createRolDto.codigo, createRolDto.nombre);
    if (existeRol)
      throw new ConflictException({
        message: MessageEnum.EXIST,
        data: null,
      });
    const nuevoRol = new RolEntity();
    Object.assign(nuevoRol, createRolDto);
    return this.dataSource.getRepository(RolEntity).save(nuevoRol);
  }
  async findOneByCodigoNombre(codigo: string, nombre: string): Promise<RolEntity> {
    return this.dataSource.getRepository(RolEntity).findOneBy({
      codigo,
      nombre,
      estado: estadoConst.ACTIVO,
    });
  }

  async findAll(options: PaginationDto): Promise<any> {
    const res = this.dataSource
      .getRepository(RolEntity)
      .createQueryBuilder('roles')
      .where('roles.estado = :estado', { estado: estadoConst.ACTIVO });
    return paginateQuery(res, options);
  }

  async findOneById(id: number): Promise<RolEntity> {
    return this.dataSource.getRepository(RolEntity).findOneBy({ id, estado: estadoConst.ACTIVO });
  }
  async updateRol(id: number, updateRolDto: UpdateRoleDto): Promise<RolEntity> {
    const existeRol = await this.findOneById(id);
    if (!existeRol)
      throw new NotFoundException({
        message: MessageEnum.NOT_EXIST,
        data: null,
      });
    const rolDuplicado = await this.findOneByCodigoNombre(updateRolDto.codigo, updateRolDto.nombre);
    if (rolDuplicado && existeRol.id != rolDuplicado.id)
      throw new ConflictException({
        message: MessageEnum.EXIST,
        data: rolDuplicado,
      });
    const rolUpdate = this.dataSource.getRepository(RolEntity).create(updateRolDto);
    return await this.dataSource.getRepository(RolEntity).save({
      id,
      rolUpdate,
    });
  }

  async remove(id: number): Promise<number> {
    const existeRol = await this.findOneById(id);
    if (!existeRol)
      throw new NotFoundException({
        message: MessageEnum.NOT_EXIST,
        data: null,
      });
    return (await this.dataSource.getRepository(RolEntity).save({ id, estado: estadoConst.ELIMINADO })).id;
  }
  async findRolesbyIdUsuario(idUsuario: number): Promise<RolEntity[]> {
    const response = await this.dataSource
      .getRepository(RolEntity)
      .createQueryBuilder('roles')
      .innerJoin('roles.usuariosRol', 'usuariosRol', 'usuariosRol.estado = :estado', { estado: estadoConst.ACTIVO })
      .innerJoin('usuariosRol.usuario', 'usuario', 'usuario.estado = :estado', {
        estado: estadoConst.ACTIVO,
      })
      .where('usuario.id = :idUsuario', { idUsuario })
      .getMany();
    return response;
  }

  async createUsuarioRol(createUsuarioRolDto: CreateUsuarioRolDto): Promise<number> {
    const existe = await this.dataSource.getRepository(UsuarioRolEntity).findOneBy({
      idRol: createUsuarioRolDto.idRol,
      idUsuario: createUsuarioRolDto.idUsuario,
      estado: estadoConst.ACTIVO,
    });
    if (existe)
      throw new ConflictException({
        message: MessageEnum.EXIST,
        data: null,
      });
    const nuevoUsuarioRol = new UsuarioRolEntity();
    nuevoUsuarioRol.idRol = createUsuarioRolDto.idRol;
    nuevoUsuarioRol.idUsuario = createUsuarioRolDto.idUsuario;
    const respuesta = await this.dataSource.getRepository(UsuarioRolEntity).save(nuevoUsuarioRol);
    return respuesta.id;
  }
  async deleteUsuarioRol(idUsuario: number, idRol: number) {
    return await this.dataSource
      .getRepository(UsuarioRolEntity)
      .createQueryBuilder()
      .update(UsuarioRolEntity)
      .set({
        estado: estadoConst.ELIMINADO,
      })
      .where('idUsuario = :idUsuario', { idUsuario })
      .andWhere('idRol = :idRol', { idRol })
      .andWhere('estado = :estado', { estado: estadoConst.ACTIVO })
      .execute();
  }
}
