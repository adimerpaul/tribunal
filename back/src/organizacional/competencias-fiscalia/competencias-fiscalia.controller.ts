import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { CompetenciasFiscaliaService } from './competencias-fiscalia.service';

@Controller('competencias-fiscalia')
@UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Oficinas Fiscalia')
@ApiBearerAuth()
export class CompetenciasFiscaliaController {
  constructor(private readonly competenciasFiscaliaService: CompetenciasFiscaliaService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de oficinas CompetenciasFiscalia',
    description: 'Retorna una lista de oficinas CompetenciasFiscalia',
  })
  findAll() {
    return this.competenciasFiscaliaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una oficinas CompetenciasFiscalia',
    description: 'Retorna una oficinas CompetenciasFiscalia segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.competenciasFiscaliaService.findOne(+id);
  }
}
