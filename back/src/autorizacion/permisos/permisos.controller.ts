import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PermisosService } from './permisos.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';

import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('[Autorización] - Permisos')
@Controller('permisos')
@ApiBearerAuth()
export class PermisosController {
  constructor(private readonly permisosService: PermisosService) { }

  @Post()
  @ApiOperation({
    summary: 'Crear un permiso',
    description: 'Crea un permiso para el sistema',
  })
  create(@Body() createPermisoDto: CreatePermisoDto) {
    return this.permisosService.create(createPermisoDto);
  }

  @Post('/paginado')
  @ApiOperation({
    summary: 'Obtener permisos',
    description: 'Retorna una lista de permisos',
  })
  @HttpCode(HttpStatus.OK)
  findAll(@Body() options: PaginationDto) {
    return this.permisosService.findAll(options);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Devuelve un determinado permiso',
    description: 'Retorna un permiso a partir del id',
  })
  findOne(@Param('id') id: string) {
    return this.permisosService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar un permiso',
    description: 'Actualiza los campos del registro enviados a partir de un id',
  })
  update(@Param('id') id: string, @Body() updatePermisoDto: UpdatePermisoDto) {
    return this.permisosService.update(+id, updatePermisoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Elimina un permiso',
    description: 'Elimina un determinado permiso a partir del id',
  })
  remove(@Param('id') id: string) {
    return this.permisosService.remove(+id);
  }
}
