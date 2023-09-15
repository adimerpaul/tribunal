import { Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { MessageEnum } from 'src/common/constants/message.enum';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Menu } from '../menus/entities/menu.entity';
import { MenuRepository } from '../menus/repositories/menu.repository';
import { PermisoEntity } from '../permisos/entities/permiso.entity';
import { PermisoRepository } from '../permisos/repositories/permiso.repository';
import { CreateRolMenuDto } from './dto/create-rol-menu-dto';
import { CreateRolPermisoDto } from './dto/create-rol-permiso-dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolEntity } from './entities/rol.entity';
import { RolRepository } from './repositories/rol.repository';

@Injectable()
export class RolesService {
  constructor(
    @Inject(RolRepository)
    private readonly rolRepository: RolRepository,
    private readonly menuRepository: MenuRepository,
    private readonly permisoRepository: PermisoRepository,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    return await this.rolRepository.create(createRoleDto).catch(e => {
      throw new UnprocessableEntityException(e.message, MessageEnum.ERROR_CREATE);
    });
  }

  async findAll(options: PaginationDto) {
    return await this.rolRepository.findAll(options);
  }

  async findOne(id: number): Promise<RolEntity> {
    return await this.rolRepository.findOneById(id);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.rolRepository.updateRol(id, updateRoleDto);
  }

  async remove(id: number) {
    return await this.rolRepository.remove(id);
  }

  async obtenerMenusPorIdRol(idRol: number): Promise<Menu[]> {
    return await this.menuRepository.findByIdRol(idRol);
  }

  async crearRolMenu(createRolMenuDto: CreateRolMenuDto): Promise<{ rolMenuId: number }> {
    const existeRol = await this.rolRepository.findOneById(createRolMenuDto.idRol);
    if (!existeRol) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const existeMenu = await this.menuRepository.findOne(createRolMenuDto.idMenu);
    if (!existeMenu) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const response = await this.menuRepository.createRolMenu(createRolMenuDto);
    return { rolMenuId: response };
  }

  async removeRolMenu(idRol: number, idMenu: number): Promise<any> {
    const existeRol = await this.rolRepository.findOneById(idRol);
    if (!existeRol) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const existeMenu = await this.menuRepository.findOne(idMenu);
    if (!existeMenu) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const response = await this.menuRepository.deleteRolMenu(idRol, idMenu);
    return { rolMenuId: response };
  }

  async obtenerPermisosPorIdRol(idRol: number): Promise<PermisoEntity[]> {
    return await this.permisoRepository.findPermisosbyIdRol(idRol);
  }

  async crearRolPErmiso(createRolPermisoDto: CreateRolPermisoDto): Promise<{ rolPermisoId: number }> {
    const existeRol = await this.rolRepository.findOneById(createRolPermisoDto.idRol);
    if (!existeRol) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const existeMenu = await this.permisoRepository.findOne(createRolPermisoDto.idPermiso);
    if (!existeMenu) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const response = await this.permisoRepository.createRolPermiso(createRolPermisoDto);
    return { rolPermisoId: response };
  }

  async removeRolPermiso(idRol: number, idPermiso: number): Promise<any> {
    const existeRol = await this.rolRepository.findOneById(idRol);
    if (!existeRol) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const existeMenu = await this.permisoRepository.findOne(idPermiso);
    if (!existeMenu) throw new NotFoundException(MessageEnum.NOT_EXIST, null);
    const response = await this.permisoRepository.deleteRolPermiso(idRol, idPermiso);
    return { rolMenuId: response };
  }
}
