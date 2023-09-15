import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { compare } from 'bcryptjs';
import { UsuariosEntity } from 'src/autorizacion/usuarios/entities/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, Tokens } from 'src/autorizacion/auth/types';
import { RolRepository } from '../roles/repositories/rol.repository';
import { Menu } from '../menus/entities/menu.entity';
import { MenuRepository } from '../menus/repositories/menu.repository';
import { MessageResponse } from 'src/common/entities/message-response';
import { MessageEnum } from 'src/common/constants/message.enum';
import { PersonasRepository } from 'src/identidad/personas/repositories/personas.repository';
import { UsuariosRepository } from 'src/autorizacion/usuarios/repositories/usuarios.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
    private readonly rolRespository: RolRepository,
    private readonly menuRespository: MenuRepository,
    private readonly personaRepository: PersonasRepository,
    private readonly usuariosRepository: UsuariosRepository
  ) { }

  async validateUser(usuario: string, pass: string): Promise<any> {
    const user = await this.usuarioService.findOneNombreUsuario(usuario);

    if (user && (await compare(pass, user.clave))) {
      const { ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: UsuariosEntity) {
    const { id } = user;
    const tokens = await this.getTokens(user.id, user.usuario);

    await this.usuarioService.updateJwt(id, tokens);
    return new MessageResponse(
      MessageEnum.AUTHENTICATED,
      await this.informacionUsuario(user, tokens.access_token, tokens.refresh_token),
    );
  }
  async informacionUsuario(usuario: UsuariosEntity, accessToken: string, refreshToken: string) {
    const persona = await this.personaRepository.findOneById(usuario.idPersona);
    const roles = await this.rolRespository.findRolesbyIdUsuario(usuario.id);
    const menus: Menu[] = [];

    for (const rol of roles) {
      const menusPorRol = await this.menuRespository.findByIdRol(rol.id);
      const menuNoRepetidos = menusPorRol.filter(objeto => !this.objetoConMismoId(objeto, menus));
      menus.push(...menuNoRepetidos);
    }
    return {
      usuario: {
        id: usuario.id,
        usuario: usuario.usuario,
        persona,
        roles,
        accessToken,
        refreshToken,
      },
      menus: this.armarSubMenus(menus),
    };
  }
  logout(userId: number): Promise<boolean> {
    return this.usuariosRepository.logout(userId);
  }

  async refreshTokens(userId: number, refreshToken: string) {

    const user = await this.usuariosRepository.refreshTokens(userId, refreshToken);

    if (!user) {
      throw new ForbiddenException('No se ha podido refrescar el token');
    }

    const tokens = await this.getTokens(user.id, user.usuario);
    this.usuariosRepository.updateRtHash(user.id, tokens.access_token);
    return tokens
  }

  async getTokens(userId: number, usuario: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId,
      usuario: usuario,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.AT_JWT_SECRET,
        expiresIn: process.env.AT_JWT_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.RT_JWT_SECRET,
        expiresIn: process.env.RT_JWT_TIME,
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  objetoConMismoId(objeto, array) {
    return array.some(item => item.id === objeto.id);
  }
  armarSubMenus(menus: any[]) {
    const menuConSubmenus = {};

    // Iterar por los menús para agruparlos por "idPadre"
    menus.forEach(menu => {
      const idPadre = menu.idPadre;
      if (!menuConSubmenus[idPadre]) {
        menuConSubmenus[idPadre] = [];
      }
      menuConSubmenus[idPadre].push(menu);
    });

    menus.forEach(menu => {
      const id = menu.id;
      if (menuConSubmenus[id]) {
        menu.subMenus = this.ordenarMenusPorDespliegue(menuConSubmenus[id]);
      }
    });

    // Filtrar para obtener solo los menús principales (sin "idPadre") y ordenarlos
    const menusPrincipales = this.ordenarMenusPorDespliegue(menus.filter(menu => menu.idPadre === 0));

    return menusPrincipales;
  }
  ordenarMenusPorDespliegue(menus: any[]) {
    return menus.sort((a, b) => a.ordenDespliegue - b.ordenDespliegue);
  }
}
