import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposAutoIdentificacionesService } from './tipos-auto-identificaciones.service';

@Controller('tipos-auto-identificaciones')
@ApiTags('[Catálogo] - Tipos Auto Identificaciones')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposAutoIdentificacionesController {
  constructor(private readonly tiposAutoIdentificacionesService: TiposAutoIdentificacionesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Auto Identificaciones',
    description: 'Retorna una lista de Tipos Auto Identificaciones',
  })
  findAll() {
    return this.tiposAutoIdentificacionesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Auto Identificaciones',
    description: 'Retorna un Tipo Auto Identificaciones segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposAutoIdentificacionesService.findOne(+id);
  }
}
