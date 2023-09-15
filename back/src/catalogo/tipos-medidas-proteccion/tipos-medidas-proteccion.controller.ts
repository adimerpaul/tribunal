import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposMedidasProteccionService } from './tipos-medidas-proteccion.service';

@Controller('tipos-medidas-proteccion')
@ApiTags('[Catálogo] - Tipos Medidas Proteccion')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposMedidasProteccionController {
  constructor(private readonly tiposMedidasProteccionService: TiposMedidasProteccionService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Estados Causas',
    description: 'Retorna una lista de Tipos Estados Causas',
  })
  findAll() {
    return this.tiposMedidasProteccionService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Estado Causa',
    description: 'Retorna un Tipo Estado Causa segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposMedidasProteccionService.findOne(+id);
  }
}
