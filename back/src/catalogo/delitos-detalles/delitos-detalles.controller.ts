import { Controller, Get, Param } from '@nestjs/common';
import { DelitosDetallesService } from './delitos-detalles.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('delitos-detalles')
@ApiTags('[Catálogo] - Delitos Detalles')
export class DelitosDetallesController {
  constructor(private readonly delitosDetallesService: DelitosDetallesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Delitos Detalles',
    description: 'Retorna una lista de Delitos Detalles',
  })
  findAll() {
    return this.delitosDetallesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Delito Detalle',
    description: 'Retorna un Delito Detalle segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.delitosDetallesService.findOne(+id);
  }
}
