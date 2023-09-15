import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TiposEtapasCausasService } from './tipos-etapas-causas.service';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';

@Controller('tipos-etapas-causas')
@ApiTags('[Catálogo] - Tipos Etapas Causas')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposEtapasCausasController {
  constructor(private readonly tiposEtapasCausasService: TiposEtapasCausasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de tipos etapas causas',
    description: 'Retorna la lista de tipos etapas causas',
  })
  findAll() {
    return this.tiposEtapasCausasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene informacion de un tipo etapa causa',
    description: 'Retorna un tipo etapa causa a partir de un id',
  })
  findOne(@Param('id') id: number) {
    return this.tiposEtapasCausasService.findOne(+id);
  }
}
