import { DataSource } from 'typeorm';
import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from '../dto/create-menu.dto';
import { Menu } from '../entities/menu.entity';
import { UpdateMenuDto } from '../dto/update-menu.dto';
import { estadoConst } from 'src/common/constants/estado.constant';
import { RolMenu } from '../entities/rol-menu.entity';
import { MessageEnum } from 'src/common/constants/message.enum';
import { CreateRolMenuDto } from 'src/autorizacion/roles/dto/create-rol-menu-dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { paginateQuery } from 'src/common/querys/pagination.guery';
import { MessageResponse } from 'src/common/entities/message-response';
import { PaginationResult } from 'src/common/entities/pagination-result';

@Injectable()
export class MenuRepository {
  constructor(private dataSource: DataSource) { }

  async findOneByMenu(nombre: string) {
    return this.dataSource.getRepository(Menu).findOneBy({ nombre });
  }

  async findAll(options: PaginationDto): Promise<MessageResponse<PaginationResult>> {
    const res = this.dataSource
      .getRepository(Menu)
      .createQueryBuilder('menus')
      .where('menus.estado = :estado', { estado: estadoConst.ACTIVO });
    return paginateQuery(res, options);
  }

  async findOne(id: number) {
    const respuesta = await this.dataSource.getRepository(Menu).findOneBy({ id });

    if (!respuesta) {
      throw new BadRequestException(MessageEnum.NOT_EXIST);
    }
    return respuesta;
  }

  async create(createMenuDto: CreateMenuDto) {
    const { nombre, descripcion, icono, url, ordenDespliegue, idPadre } = createMenuDto;

    const menu = new Menu();
    menu.nombre = nombre;
    menu.descripcion = descripcion;
    menu.icono = icono;
    menu.url = url;
    menu.ordenDespliegue = ordenDespliegue;
    menu.idPadre = idPadre;

    const exist = await this.findOneByMenu(nombre);
    if (exist) {
      throw new BadRequestException(MessageEnum.EXIST);
    }

    return await this.dataSource.getRepository(Menu).save(menu);
  }

  async delete(id: number) {
    const menu = await this.findOne(id);
    menu.estado = estadoConst.ELIMINADO;
    this.dataSource.getRepository(Menu).save(menu);
    return id;
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    const menu = await this.findOne(id);
    Object.assign(menu, updateMenuDto);
    return this.dataSource.getRepository(Menu).save(menu);
  }

  async findByIdRol(idRol: number): Promise<Menu[]> {
    const response = await this.dataSource
      .getRepository(Menu)
      .createQueryBuilder('menus')
      .innerJoin('menus.rolesMenu', 'rolesMenu', 'rolesMenu.estado = :estado', { estado: estadoConst.ACTIVO })
      .innerJoin('rolesMenu.rol', 'rol', 'rol.estado = :estado', { estado: estadoConst.ACTIVO })
      .where('rol.id = :idRol', { idRol })
      .getMany();
    return response;
  }

  async createRolMenu(createRolMenuDto: CreateRolMenuDto): Promise<number> {
    const existe = await this.dataSource.getRepository(RolMenu).findOneBy({
      idRol: createRolMenuDto.idRol,
      idMenu: createRolMenuDto.idMenu,
      estado: estadoConst.ACTIVO,
    });
    if (existe)
      throw new ConflictException({
        message: MessageEnum.EXIST,
        data: null,
      });

    const nuevoRolMenu = new RolMenu();
    nuevoRolMenu.idRol = createRolMenuDto.idRol;
    nuevoRolMenu.idMenu = createRolMenuDto.idMenu;
    const respuesta = await this.dataSource.getRepository(RolMenu).save(nuevoRolMenu);
    return respuesta.id;
  }

  async deleteRolMenu(idRol: number, idMenu: number) {
    return await this.dataSource
      .getRepository(RolMenu)
      .createQueryBuilder()
      .update(RolMenu)
      .set({ estado: estadoConst.ELIMINADO })
      .where('idMenu = :idMenu', { idMenu })
      .andWhere('idRol = :idRol', { idRol })
      .andWhere('estado = :estado', { estado: estadoConst.ACTIVO })
      .execute();
  }
}
