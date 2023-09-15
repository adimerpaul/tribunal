import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposGradosDiscapacidadesService } from './tipos-grados-discapacidades.service';

@Controller('tipos-grados-discapacidades')
@ApiTags('[Catálogo] - Tipos Grados Discapacidades')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposGradosDiscapacidadesController {
  constructor(private readonly tipoGradosDiscapacidadesService: TiposGradosDiscapacidadesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Grados Discapacidades',
    description: 'Retorna una lista de Tipos Grados Discapacidades',
  })
  findAll() {
    return this.tipoGradosDiscapacidadesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Grados Discapacidades',
    description: 'Retorna un Tipo Grados Discapacidades segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tipoGradosDiscapacidadesService.findOne(+id);
  }
}
