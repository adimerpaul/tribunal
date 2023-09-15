import { Controller, Get, Param } from '@nestjs/common';
import { TiposActosProcesalesAreasOrganizacionalesService } from './tipos-actos-procesales-areas-organizacionales.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tipos-actos-procesales-areas-organizacionales')
@ApiTags('[Catálogo] - Tipos Actos Procesales, Áreas Organizacionales')
export class TiposActosProcesalesAreasOrganizacionalesController {
  constructor(
    private readonly tiposActosProcesalesAreasOrganizacionalesService: TiposActosProcesalesAreasOrganizacionalesService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de tipos actos procesales areas organizacionales',
    description: 'retorna la lista de tipos actos procesales areas organizacionales',
  })
  findAll() {
    return this.tiposActosProcesalesAreasOrganizacionalesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene informacion de una Categorias actos procesales',
    description: 'retorna una Categorias actos procesales',
  })
  findOne(@Param('id') id: string) {
    return this.tiposActosProcesalesAreasOrganizacionalesService.findOne(+id);
  }
}
