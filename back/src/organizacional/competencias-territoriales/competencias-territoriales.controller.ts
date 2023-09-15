import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { CompetenciasTerritorialesService } from './competencias-territoriales.service';

@Controller('competencias-territoriales')
@UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Competencias Territoriales')
@ApiBearerAuth()
export class CompetenciasTerritorialesController {
  constructor(private readonly competenciasTerritorialesService: CompetenciasTerritorialesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de oficinas Competencias Territoriales',
    description: 'Retorna una lista de oficinas Competencias Territoriales',
  })
  findAll() {
    return this.competenciasTerritorialesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una oficinas Competencias Territoriales',
    description: 'Retorna una oficinas Competencias Territoriales segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.competenciasTerritorialesService.findOne(+id);
  }
}
