import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposRiesgosProcesalesService } from './tipos-riesgos-procesales.service';

@Controller('tipos-riesgos-procesales')
@ApiTags('[Catálogo] - Tipos Riesgos Procesales')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposRiesgosProcesalesController {
  constructor(private readonly tiposRiesgosProcesalesService: TiposRiesgosProcesalesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Estados Causas',
    description: 'Retorna una lista de Tipos Estados Causas',
  })
  findAll() {
    return this.tiposRiesgosProcesalesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Estado Causa',
    description: 'Retorna un Tipo Estado Causa segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposRiesgosProcesalesService.findOne(+id);
  }
}
