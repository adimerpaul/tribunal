import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuariosRepository } from './repositories/usuarios.repository';
import { Tokens } from 'src/autorizacion/auth/types';
import { DataSource } from 'typeorm';
import { PersonasRepository } from 'src/identidad/personas/repositories/personas.repository';
import { UsuariosEntity } from 'src/autorizacion/usuarios/entities/usuario.entity';
import { MessageEnum } from 'src/common/constants/message.enum';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { CreatePersonaDto } from 'src/identidad/personas/dto/create-persona.dto';
import { CreateUsuarioRolDto } from './dto/create-usuario-rol-dto';
import { RolEntity } from '../roles/entities/rol.entity';
import { RolRepository } from 'src/autorizacion/roles/repositories/rol.repository';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject(UsuariosRepository)
    private readonly usuariosRepositorio: UsuariosRepository,
    private readonly personasRepository: PersonasRepository,
    private readonly rolRepository: RolRepository,
    private readonly dataSource: DataSource,
  ) { }

  async create(createPersonaDto: CreatePersonaDto): Promise<UsuariosEntity> {
    return await this.dataSource
      .transaction(async transactionalEntityManager => {
        const persona = await this.personasRepository.create(transactionalEntityManager, createPersonaDto);
        return await this.usuariosRepositorio.create(transactionalEntityManager, persona);
      })
      .catch(e => {
        throw new NotFoundException(e.message, MessageEnum.ERROR_CREATE);
      });
  }

  findAll(options: PaginationDto) {
    return this.usuariosRepositorio.findAll(options);
  }

  findOne(id: number) {
    return this.usuariosRepositorio.findOne(id);
  }

  async findOnePersona(id: number): Promise<Persona> {
    return await this.personasRepository.findOnePersona(id);
  }

  findOneNombreUsuario(nombre_usuario: string) {
    return this.usuariosRepositorio.findOneByUsuario(nombre_usuario);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<boolean> {
    return this.usuariosRepositorio.updateUser(id, updateUsuarioDto);
  }

  remove(id: number): Promise<boolean> {
    return this.usuariosRepositorio.remove(id);
  }

  async asignarRol(idu: number, data: number[]): Promise<boolean> {
    return await this.usuariosRepositorio.asignarRol({
      roles: data.map(id => ({ idRol: id, idUsuario: idu })),
    });
  }

  updatePassword(id: number): Promise<boolean> {
    return this.usuariosRepositorio.updatePassword(id);
  }

  updateJwt(userId: number, tokens: Tokens) {
    return this.usuariosRepositorio.updateJwt(userId, tokens);
  }

  async generarNombreUsuario(nombre: string, apellido: string): Promise<string> {
    return this.usuariosRepositorio.generarNombreUsuario(nombre, apellido);
  }

  async obtenerRolesPorIdUsuario(idUsuario: number): Promise<RolEntity[]> {
    return await this.rolRepository.findRolesbyIdUsuario(idUsuario);
  }

  async crearRolUsuario(usuarioRolNuevo: CreateUsuarioRolDto): Promise<{ usuarioRolId: number }> {
    const existeRol = await this.rolRepository.findOneById(usuarioRolNuevo.idRol);
    if (!existeRol) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const existeUsuario = await this.usuariosRepositorio.findOne(usuarioRolNuevo.idUsuario);
    if (!existeUsuario) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const response = await this.rolRepository.createUsuarioRol(usuarioRolNuevo);
    return { usuarioRolId: response };
  }

  async removeUsuarioRol(idUsuario: number, idRol: number): Promise<any> {
    const existeRol = await this.rolRepository.findOneById(idRol);
    if (!existeRol) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const existeUsuario = await this.usuariosRepositorio.findOne(idUsuario);
    if (!existeUsuario) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const response = await this.rolRepository.deleteUsuarioRol(idUsuario, idRol);
    return { usuarioRolId: response };
  }
}
