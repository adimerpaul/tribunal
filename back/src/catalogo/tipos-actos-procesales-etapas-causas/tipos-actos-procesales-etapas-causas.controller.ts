import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TiposActosProcesalesEtapasCausasService } from './tipos-actos-procesales-etapas-causas.service';

@Controller('tipos-actos-procesales-etapas-causas')
@ApiTags('[Catálogo] - Tipos Actos Procesales, Etapas Causas')
export class TiposActosProcesalesEtapasCausasController {
  constructor(private readonly tiposActosProcesalesEtapasCausasService: TiposActosProcesalesEtapasCausasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de tipos actos procesales - etapas causas',
    description: 'Retorna la lista de tipos actos procesales etapas causas',
  })
  findAll() {
    return this.tiposActosProcesalesEtapasCausasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene informacion de un tipo acto procesal - etapa causa',
    description: 'Retorna una tipo acto procesal - etapa causa a partir de un id',
  })
  findOne(@Param('id') id: number) {
    return this.tiposActosProcesalesEtapasCausasService.findOne(+id);
  }
}
