import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposEstadosAudienciasService } from './tipos-estados-audiencias.service';

@Controller('tipos-estados-audiencias')
@ApiTags('[Catálogo] - Tipos Estados Audiencia')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposEstadosAudienciasController {
  constructor(private readonly tiposEstadosAudienciasService: TiposEstadosAudienciasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipo Estado Audiencia',
    description: 'Retorna una lista de Tipo Estado Audiencia',
  })
  findAll() {
    return this.tiposEstadosAudienciasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Estado Audiencia',
    description: 'Retorna un Tipo Estado Audiencia segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposEstadosAudienciasService.findOne(+id);
  }
}
