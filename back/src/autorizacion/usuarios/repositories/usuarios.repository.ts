import { ForbiddenException, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { Tokens } from 'src/autorizacion/auth/types';
import { UpdateUsuarioDto } from 'src/autorizacion/usuarios/dto/update-usuario.dto';
import { DataSource, EntityManager } from 'typeorm';
import { UsuariosEntity } from '../entities/usuario.entity';
import { estadoConst } from 'src/common/constants/estado.constant';
import { UsuarioRolEntity } from 'src/autorizacion/roles/entities/usuario-rol.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { paginateQuery } from 'src/common/querys/pagination.guery';

@Injectable()
export class UsuariosRepository {
  constructor(
    private dataSource: DataSource, // private readonly jwtService: JwtService,
  ) {}

  async create(transaccion: EntityManager, Persona: Persona): Promise<UsuariosEntity> {
    const { id, nombres, primerApellido } = Persona;

    const existe_usuario = await this.findUsuarioById(id);

    if (existe_usuario) {
      return existe_usuario;
    }

    const username = await this.generarNombreUsuario(nombres, primerApellido);
    const user = new UsuariosEntity();
    user.idPersona = id;
    user.usuario = username;
    user.clave = process.env.DEFAULT_PASSWORD;
    return await transaccion.getRepository(UsuariosEntity).save(user);
  }

  async generarNombreUsuario(nombre: string, apellido: string): Promise<string> {
    const nombresArray = nombre.split(' ');
    let respuesta = '';
    let inicialesNombres = '';
    for (const element of nombresArray) {
      inicialesNombres = inicialesNombres + element[0];
      const sugerido = (inicialesNombres + apellido).toUpperCase();
      // ******* Buscar en la Base: *****
      const encontrado = await this.findOneByUsuario(sugerido);
      if (!encontrado) {
        //**** Devolver sugerencia
        respuesta = sugerido;
        return respuesta;
      }
    }
    if (respuesta.length === 0) {
      for (let i = 2; i <= nombresArray[0].length; i++) {
        const letrasNombre = nombre.slice(0, i);
        const sugerido = (letrasNombre + apellido).toUpperCase();
        // ******* Buscar en la Base: *****
        const encontrado = await this.findOneByUsuario(sugerido);
        if (!encontrado) {
          //**** Devolver sugerencia
          respuesta = sugerido;
          return respuesta;
        }
      }
    }
    return respuesta.toLowerCase();
  }

  findAll(options: PaginationDto): Promise<any> {
    const res = this.dataSource
      .getRepository(UsuariosEntity)
      .createQueryBuilder('usuarios')
      .leftJoinAndSelect('usuarios.persona', 'personas')
      .leftJoinAndSelect('personas.funcionarios', 'funcionarios')
      .leftJoinAndSelect('funcionarios.cargo', 'tiposcargosfuncion')
      //.leftJoinAndSelect('funcionarios.idOficiana', 'oficina')
      .select([
        'usuarios.id',
        'usuarios.estado',
        'usuarios.usuario',
        'personas.nombres',
        'personas.primerApellido',
        'personas.segundoApellido',
        'personas.fechaNacimiento',
        'personas.idNacionalidad',
        'personas.idMunicipioNacimiento',
        'personas.sexo',
        'personas.idEstadoCivil',
        'personas.profesionOcupacion',
        'funcionarios.correoElectronico',
        'tiposcargosfuncion.descripcion',
        //'oficina.descripcion',
      ])
      // .where('usuarios.estado = :estado', { estado: estadoConst.ACTIVO })
      // return paginateQuery(res, options);
      // // .createQueryBuilder('u')
      // // .leftJoinAndSelect('u.persona', 'p')
      // // .leftJoinAndSelect('p.funcionarios', 'f')
      // // .leftJoinAndSelect('f.cargo', 'c')
      // // .leftJoinAndSelect('f.idOficina', 'o')
      // // .select([
      // //   'u.usuario',
      // //   'u.estado',
      // //   'p.tipoDocumentoIdentidad',
      // //   'p.documentoIdentidad',
      // //   'p.complemento',
      // //   'p.nombres',
      // //   'p.primerApellido',
      // //   'p.segundoApellido',
      // //   'p.fechaNacimiento',
      // //   'p.idNacionalidad',
      // //   'p.idMunicipioNacimiento',
      // //   'p.sexo',
      // //   'p.idEstadoCivil',
      // //   'p.profesionOcupacion',
      // //   'f.correoElectronico',
      // //   'c.descripcion',
      // //   'o.descripcion',
      // // ])
      .where('usuarios.estado = :estado', { estado: estadoConst.ACTIVO });
    // .getManyAndCount();
    return paginateQuery(res, options);
  }

  async findOneByUsuario(username: string) {
    return await this.dataSource
      .getRepository(UsuariosEntity)
      .createQueryBuilder('usuarios')
      .where({ usuario: username })
      .addSelect('usuarios.clave')
      .getOne();
  }

  async findUsuarioById(id: number) {
    return await this.dataSource
      .getRepository(UsuariosEntity)
      .createQueryBuilder('usuarios')
      .where({ idPersona: id })
      .getOne();
  }

  async updateUser(id: number, data: UpdateUsuarioDto): Promise<boolean> {
    if (data.clave) {
      data.clave = await hash(data.clave, parseInt(process.env.ROUNDS_SECURITY));
    }
    await this.dataSource.createQueryBuilder().update(UsuariosEntity).set(data).where('id = :id', { id }).execute();
    return true;
  }

  async findOne(id: number) {
    return this.dataSource
      .getRepository(UsuariosEntity)
      .createQueryBuilder('usuarios')
      .leftJoinAndSelect('usuarios.persona', 'persona')
      .where('usuarios.id = :name', { name: id })
      .getOne();
  }

  async remove(id: number): Promise<boolean> {
    await this.dataSource
      .createQueryBuilder()
      .update(UsuariosEntity)
      .set({ estado: estadoConst.ELIMINADO })
      .where('id = :id', { id })
      .execute();
    return true;
  }

  async updatePassword(id: number): Promise<boolean> {
    const nuevaClave = await hash(process.env.DEFAULT_PASSWORD, parseInt(process.env.ROUNDS_SECURITY));
    await this.dataSource
      .createQueryBuilder()
      .update(UsuariosEntity)
      .set({ clave: nuevaClave })
      .where('id = :id', { id })
      .execute();
    return true;
  }

  async asignarRol(data): Promise<boolean> {
    await this.dataSource.createQueryBuilder().insert().into(UsuarioRolEntity).values(data.roles).execute();
    return true;
  }

  async refreshTokens(userId: number, rt: string): Promise<UsuariosEntity> {
    const user = await this.dataSource.getRepository(UsuariosEntity).findOneBy({ id: userId, refreshToken: rt });

    if (user == null) {
      throw new ForbiddenException('Acceso denegado');
    }

    return user;
  }

  async updateRtHash(userId: number, at: string): Promise<void> {
    await this.dataSource
      .createQueryBuilder()
      .update(UsuariosEntity)
      .set({ token: at })
      .where('id = :id', { id: userId })
      .execute();
  }

  async updateJwt(userId: number, tokens: Tokens) {
    return await this.dataSource
      .createQueryBuilder()
      .update(UsuariosEntity)
      .set({ token: tokens.access_token, refreshToken: tokens.refresh_token })
      .where('id = :id', { id: userId })
      .execute();
  }

  async logout(userId: number): Promise<boolean> {
    await this.dataSource
      .createQueryBuilder()
      .update(UsuariosEntity)
      .set({ token: null, refreshToken: null })
      .where('id = :id', { id: userId })
      .execute();

    return true;
  }
}
