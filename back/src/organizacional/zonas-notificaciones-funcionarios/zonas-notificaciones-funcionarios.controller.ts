import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ZonasNotificacionesFuncionariosService } from './zonas-notificaciones-funcionarios.service';

@Controller('zonas-notificaciones-funcionarios')
@ApiTags('[Organizacional] - Zonas de Zonitificaciones, Funcionarios')
export class ZonasNotificacionesFuncionariosController {
  constructor(private readonly zonasNotificacionesFuncionariosService: ZonasNotificacionesFuncionariosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de zonasNotificacionesFuncionarios',
    description: 'Retorna una lista de zonasNotificacionesFuncionarios',
  })
  findAll() {
    return this.zonasNotificacionesFuncionariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una zonasNotificacionesFuncionarios',
    description: 'Retorna una zonasNotificacionesFuncionarios segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.zonasNotificacionesFuncionariosService.findOne(+id);
  }
}
