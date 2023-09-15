import { Controller, Get, Param } from '@nestjs/common';
import { TiposActosProcesalesEstadosCausasService } from './tipos-actos-procesales-estados-causas.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@Controller('tipos-actos-procesales-estados-causas')
@ApiTags('[Catálogo] - Tipos Actos Procesales, Etados Causas')
export class TiposActosProcesalesEstadosCausasController {
  constructor(private readonly tiposActosProcesalesEstadosCausasService: TiposActosProcesalesEstadosCausasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de tipos actos procesales estados causas',
    description: 'retorna la lista de tipos actos procesales estados causas',
  })
  findAll() {
    return this.tiposActosProcesalesEstadosCausasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene informacion de una lista de tipo acto procesal estado causa',
    description: 'retorna una lista de tipo acto procesal estado causa',
  })
  findOne(@Param('id') id: string) {
    return this.tiposActosProcesalesEstadosCausasService.findOne(+id);
  }
}
