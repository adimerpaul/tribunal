import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TiposActosProcesalesTiposAudienciasService } from './tipos-actos-procesales-tipos-audiencias.service';

@Controller('tipos-actos-procesales-tipos-audiencias')
@ApiTags('[Catálogo] - Tipos Actos Procesales, Tipos Audiencias')
export class TiposActosProcesalesTiposAudienciasController {
  constructor(
    private readonly tiposActosProcesalesTiposAudienciasService: TiposActosProcesalesTiposAudienciasService,
  ) {}
  @Get()
  @ApiOperation({
    summary: 'Lista de tipos actos procesales - tipos audiencias',
    description: 'retorna la lista de tipos actos procesales - tipos audiencias',
  })
  findAll() {
    return this.tiposActosProcesalesTiposAudienciasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Un registro de tipo acto procesal y tipo audiencia',
    description: 'Retorna una relación entre tipo acto procesal y tipo audiencia, a partir de un id',
  })
  findOne(@Param('id') id: number) {
    return this.tiposActosProcesalesTiposAudienciasService.findOne(+id);
  }
}
