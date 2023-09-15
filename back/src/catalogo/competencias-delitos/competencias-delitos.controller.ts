import { Controller, Get, Param } from '@nestjs/common';
import { CompetenciasDelitosService } from './competencias-delitos.service';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('competencias-delitos')
@ApiTags('[Catálogo] - Competencias Delitos')
export class CompetenciasDelitosController {
  constructor(private readonly competenciasDelitosService: CompetenciasDelitosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Competencias Delitos',
    description: 'Retorna una lista de Competencias Delitos',
  })
  findAll() {
    return this.competenciasDelitosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de Competencias Delitos',
    description: 'Retorna una Competencias Delitos segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.competenciasDelitosService.findOne(+id);
  }
}
