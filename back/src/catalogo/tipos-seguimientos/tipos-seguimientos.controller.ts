import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposSeguimientosService } from './tipos-seguimientos.service';

@Controller('tipos-seguimientos')
@ApiTags('[Catálogo] - Tipos Seguimientos')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposSeguimientosController {
  constructor(private readonly tiposSeguimientosService: TiposSeguimientosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Seguimientos',
    description: 'Retorna una lista de Tipos Seguimientos',
  })
  findAll() {
    return this.tiposSeguimientosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Seguimientos',
    description: 'Retorna un Tipo Seguimientos segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposSeguimientosService.findOne(+id);
  }
}
