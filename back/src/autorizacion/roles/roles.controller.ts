import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateRolMenuDto } from './dto/create-rol-menu-dto';
import { CreateRolPermisoDto } from './dto/create-rol-permiso-dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
@ApiTags('[Autorización] - Roles')
@ApiBearerAuth()
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @Post()
  @ApiOperation({
    summary: 'Registro de roles',
    description: ' Servicio de permite crear registros de roles',
  })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Post('/paginado')
  @ApiOperation({
    summary: 'Lista de roles',
    description: 'Retorna una lista de roles',
  })
  @HttpCode(HttpStatus.OK)
  findAll(@Body() options: PaginationDto) {
    return this.rolesService.findAll(options);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un rol',
    description: 'Retorna un rol segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Modificación de registros de roles',
    description: 'Servicio que permite modificar los regitros de roles, requiere el ID del registro',
  })
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar registros de rol' })
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }

  @Get('menu/:idRol')
  @ApiOperation({
    summary: 'Lista los menus de un rol',
    description: 'Dato requerido idRol',
  })
  obtenerMenusPorRol(@Param('idRol', ParseIntPipe) idRol: number) {
    return this.rolesService.obtenerMenusPorIdRol(idRol);
  }

  @Post('menu')
  @ApiOperation({
    summary: 'Asignacion del menu a rol',
    description: 'datos requerido idRol e idMenu',
  })
  createRolMenu(@Body() createRolMenuDto: CreateRolMenuDto) {
    return this.rolesService.crearRolMenu(createRolMenuDto);
  }

  @Delete('menu/:idRol/:idMenu')
  @ApiOperation({
    summary: 'Eliminacion de menu de un rol',
    description: 'datos requerido el identificador de menu y rol',
  })
  eliminarRolMenu(@Param('idRol', ParseIntPipe) idRol: number, @Param('idMenu', ParseIntPipe) idMenu: number) {
    return this.rolesService.removeRolMenu(idRol, idMenu);
  }

  @Get('permisos/:idRol')
  @ApiOperation({
    summary: 'Lista los permisos de un rol',
    description: 'Dato requerido idRol',
  })
  obtenerPermisosPorRol(@Param('idRol', ParseIntPipe) idRol: number) {
    return this.rolesService.obtenerPermisosPorIdRol(idRol);
  }
  @Post('permisos')
  @ApiOperation({
    summary: 'Asignacion del permiso a rol',
    description: 'datos requerido idRol e idPermiso',
  })
  createRolPermiso(@Body() createRolPermiso: CreateRolPermisoDto) {
    return this.rolesService.crearRolPErmiso(createRolPermiso);
  }

  @Delete('permisos/:idRol/:idPermiso')
  @ApiOperation({
    summary: 'Eliminacion de permiso de un rol',
    description: 'datos requerido el identificador de permiso y rol',
  })
  eliminarRolPermiso(@Param('idRol', ParseIntPipe) idRol: number, @Param('idPermiso', ParseIntPipe) idPermiso: number) {
    return this.rolesService.removeRolPermiso(idRol, idPermiso);
  }
}
