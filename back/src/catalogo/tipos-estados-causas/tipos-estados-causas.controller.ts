import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TiposEstadosCausasService } from './tipos-estados-causas.service';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';

@Controller('tipos-estados-causas')
@UseGuards(JwtAuthGuard)
@ApiTags('[Catálogo] - Tipos Estados Causas')
@ApiBearerAuth()
export class TiposEstadosCausasController {
  constructor(private readonly tipoEstadosCausasService: TiposEstadosCausasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Estados Causas',
    description: 'Retorna una lista de Tipos Estados Causas',
  })
  findAll() {
    return this.tipoEstadosCausasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Estado Causa',
    description: 'Retorna un Tipo Estado Causa segun al id',
  })
  findOne(@Param('id') id: number) {
    return this.tipoEstadosCausasService.findOne(+id);
  }
}
