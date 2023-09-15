import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ZonasNotificacionesService } from './zonas-notificaciones.service';

@Controller('zonas-notificaciones')
// @UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Zonas de Notificaciones')
export class ZonasNotificacionesController {
  constructor(private readonly zonasNotificacionesService: ZonasNotificacionesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de ZonasNotificaciones',
    description: 'Retorna una lista de ZonasNotificaciones',
  })
  findAll() {
    return this.zonasNotificacionesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una ZonasNotificaciones',
    description: 'Retorna una ZonasNotificaciones segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.zonasNotificacionesService.findOne(+id);
  }
}
