import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { HorariosAtencionesService } from './horarios-atenciones.service';

@Controller('horarios-atenciones')
@UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Horarios Atenciones')
@ApiBearerAuth()
export class HorariosAtencionesController {
  constructor(private readonly horariosAtencionesService: HorariosAtencionesService) {}
  @Get()
  @ApiOperation({
    summary: 'Lista de horarios-atenciones',
    description: 'Retorna una lista de horarios-atenciones',
  })
  findAll() {
    return this.horariosAtencionesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un horarios-atenciones',
    description: 'Retorna un horario de atencion segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.horariosAtencionesService.findOne(+id);
  }
}
