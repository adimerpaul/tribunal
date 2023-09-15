import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposSuspensionesAudienciasService } from './tipos-suspensiones-audiencias.service';

@Controller('tipos-suspensiones-audiencias')
@ApiTags('[Catálogo] - Tipos Suspensiones de Audiencias')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposSuspensionesAudienciasController {
  constructor(private readonly tiposSuspensionesAudienciasService: TiposSuspensionesAudienciasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Suspensiones Audiencias',
    description: 'Retorna una lista de Tipos Suspensiones Audiencias',
  })
  findAll() {
    return this.tiposSuspensionesAudienciasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene la informacion de un Tipo Suspensiones Audiencias',
    description: 'Retorna un Tipo Suspensiones Audiencias segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposSuspensionesAudienciasService.findOne(+id);
  }
}
