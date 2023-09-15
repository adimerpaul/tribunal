import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompetenciasGestorasService } from './competencias-gestoras.service';

@Controller('competencias-gestoras')
@ApiTags('[Organizacional] - Competencias Gestoras')
export class CompetenciasGestorasController {
  constructor(private readonly competenciasGestorasService: CompetenciasGestorasService) {}
  @Get()
  @ApiOperation({
    summary: 'Lista de competenciasGestoras',
    description: 'Retorna una lista de competenciasGestoras',
  })
  findAll() {
    return this.competenciasGestorasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una competenciasGestoras',
    description: 'Retorna una competenciasGestoras segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.competenciasGestorasService.findOne(+id);
  }
}
