import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposNotificacionesService } from './tipos-notificaciones.service';

@Controller('tipos-notificaciones')
@ApiTags('[Catálogo] - Tipos Notificaciones')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposNotificacionesController {
  constructor(private readonly tiposNotificacionesService: TiposNotificacionesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Estados Causas',
    description: 'Retorna una lista de Tipos Estados Causas',
  })
  findAll() {
    return this.tiposNotificacionesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Estado Causa',
    description: 'Retorna un Tipo Estado Causa segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposNotificacionesService.findOne(+id);
  }
}
