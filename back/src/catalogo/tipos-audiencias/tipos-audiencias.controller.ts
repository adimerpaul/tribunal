import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTipoAudienciaDto } from './dtos/create-tipos-audiencias.dto';
import { UpdateTipoAudienciaDto } from './dtos/update-tipos-audiencia.dto';
import { TiposAudienciasService } from './tipos-audiencias.service';

@ApiTags('[Catálogo] - Tipos Audiencias')
@Controller('tipos-audiencias')
@ApiBearerAuth()
export class TiposAudienciasController {
  constructor(private readonly tiposAudienciasService: TiposAudienciasService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear un Tipo Audiencia',
    description: 'Permite crear un Tipo Audiencia',
  })
  create(@Body() createTipoAudienciaDto: CreateTipoAudienciaDto) {
    return this.tiposAudienciasService.create(createTipoAudienciaDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Lista de tipos audiencias',
    description: 'retorna la lista de tipos-audiencias',
  })
  findAll() {
    return this.tiposAudienciasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene informacion de una tipo audiencia',
    description: 'retorna una tipo audiencia',
  })
  findOne(@Param('id') id: number) {
    return this.tiposAudienciasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar tipo audiencia',
    description: 'Actualiza los campos del registro determinado por el id que se envía',
  })
  update(@Param('id') id: number, @Body() updateTipoAudienciaDto: UpdateTipoAudienciaDto) {
    return this.tiposAudienciasService.update(+id, updateTipoAudienciaDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Elimina un tipo audiencia',
    description: 'Pone en estado ELIMINADO el tipo audiencia',
  })
  remove(@Param('id') id: number) {
    return this.tiposAudienciasService.remove(+id);
  }
}
