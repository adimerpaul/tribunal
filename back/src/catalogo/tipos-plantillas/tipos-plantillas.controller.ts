import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TipoPlantillaService } from './tipos-plantillas.service';

@Controller('tipos-plantillas')
@ApiTags('[Catálogo] - Tipos Plantillas')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TipoplantillaController {
  constructor(private readonly tipoplantillaService: TipoPlantillaService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos de Plantillas',
    description: 'Retorna una lista de Tipos de Plantillas',
  })
  findAll() {
    return this.tipoplantillaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo de Plantilla',
    description: 'Retorna un Tipo de Plantilla segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tipoplantillaService.findOne(+id);
  }
}
