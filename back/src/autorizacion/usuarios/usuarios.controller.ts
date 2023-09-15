import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';

import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuariosService } from './usuarios.service';
import { SolicitudNombreDto } from './dto/solicitud-nombre.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { UsuariosEntity } from 'src/autorizacion/usuarios/entities/usuario.entity';
import { CreatePersonaDto } from 'src/identidad/personas/dto/create-persona.dto';
import { CreateUsuarioRolDto } from './dto/create-usuario-rol-dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiBearerAuth()
@ApiTags('[Autorización] - Usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) { }

  @ApiOperation({ summary: 'Crear usuario con persona' })
  @ApiResponse({
    status: 200,
    description: 'Creacion de usuario',
    type: UsuariosEntity,
  })
  @Post()
  create(@Body() createPersonaDto: CreatePersonaDto): Promise<UsuariosEntity> {
    return this.usuarioService.create(createPersonaDto);
  }

  @ApiOperation({ summary: 'Obtener lista de usuarios' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuarios',
    type: UsuariosEntity,
  })
  @Post('/paginado')
  findAll(@Body() options: PaginationDto) {
    return this.usuarioService.findAll(options);
  }

  @ApiOperation({ summary: 'Muestra datos del usuario y persona' })
  @ApiResponse({
    status: 200,
    description: 'Datos de usuario y persona',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Optiene la persona por su id' })
  @ApiResponse({
    status: 200,
    description: 'Muestra a la persona',
    type: Persona,
  })
  @Get(':id/persona')
  findOnePersona(@Param('id') id: string): Promise<Persona> {
    return this.usuarioService.findOnePersona(Number(id));
  }

  @ApiOperation({
    summary: 'Cambia el nombre de usuario o clave en la tabla USUARIO',
  })
  @ApiResponse({
    status: 200,
    description: 'Cambio de contraseña o clave',
    // type: Persona,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto): Promise<boolean> {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @ApiOperation({ summary: 'Elimina virtualmente a un usuario' })
  @ApiResponse({
    status: 200,
    description: 'Eliminación de usuario',
    // type: Persona,
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.usuarioService.remove(+id);
  }

  @ApiOperation({
    summary: 'Se reestablece la contraseña por defecto del usuario',
  })
  @ApiResponse({
    status: 200,
    description: 'Reestablecer contraseña',
    // type: Persona,
  })
  @Patch(':id/reestablecer')
  updatePassword(@Param('id') id: string): Promise<boolean> {
    return this.usuarioService.updatePassword(+id);
  }

  @ApiOperation({ summary: 'Asignación de roles a los usuarios' })
  @ApiResponse({
    status: 201,
    description: 'Asignación de rol ',
    // type: Persona,
  })
  @Post(':id/rol')
  asignarRol(@Body('roles') idsRol: number[], @Param('id') idu: string): Promise<boolean> {
    return this.usuarioService.asignarRol(+idu, idsRol);
  }

  @Post('generarUsuario')
  @ApiOperation({
    summary: 'Sugerencia de nombre de usuario',
    description: ' Servicio que sugiere nombres de ususario a partir de nombre y apellido',
  })
  @ApiResponse({
    status: 200,
    description: 'Sugerencia de nombre de usuario',
    // type: Persona,
  })
  generarNombreUsuario(@Body() solicitudNombreDto: SolicitudNombreDto) {
    return this.usuarioService.generarNombreUsuario(solicitudNombreDto.nombres, solicitudNombreDto.apellidoPaterno);
  }
  @ApiBearerAuth()
  @Get('rol/:idUsuario')
  @ApiOperation({
    summary: 'Lista los roles de un usuario',
    description: 'Dato requerido idUsuario',
  })
  obtenerRolPorUsuario(@Param('idUsuario', ParseIntPipe) idUsuario: number) {
    return this.usuarioService.obtenerRolesPorIdUsuario(idUsuario);
  }

  @ApiBearerAuth()
  @Post('rol')
  @ApiOperation({
    summary: 'Asignacion del rol a usuario',
    description: 'datos requerido idUsuario e idRol',
  })
  createUsuarioRol(@Body() createUsuarioRolDto: CreateUsuarioRolDto) {
    return this.usuarioService.crearRolUsuario(createUsuarioRolDto);
  }

  @ApiBearerAuth()
  @Delete('rol/:idUsuario/:idRol')
  @ApiOperation({
    summary: 'Eliminacion de rol de un usuario',
    description: 'datos requerido el identificador de usuario y rol',
  })
  eliminarUsuarioRoles(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Param('idRol', ParseIntPipe) idRol: number,
  ) {
    return this.usuarioService.removeUsuarioRol(idUsuario, idRol);
  }
}
