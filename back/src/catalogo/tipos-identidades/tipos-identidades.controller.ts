import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposIdentidadesService } from './tipos-identidades.service';

@Controller('tipos-identidades')
@ApiTags('[Catálogo] - Tipos Identidades')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposIdentidadesController {
  constructor(private readonly tipoIdentidadesService: TiposIdentidadesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Identidades',
    description: 'Retorna una lista de Tipos Identidades',
  })
  findAll() {
    return this.tipoIdentidadesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene la informacion de un Tipo Identidad',
    description: 'Retorna un Tipo Identidad segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tipoIdentidadesService.findOne(+id);
  }
}
