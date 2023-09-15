import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OficinasEstadosService } from './oficinas-estados.service';

@Controller('oficinas-estados')
@ApiTags('[Organizacional] - Oficinas Estados')
export class OficinasEstadosController {
  constructor(private readonly oficinasEstadosService: OficinasEstadosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de oficinas Estados',
    description: 'Retorna una lista de oficinas Estados',
  })
  findAll() {
    return this.oficinasEstadosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una oficina Estados',
    description: 'Retorna una oficina Estados segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.oficinasEstadosService.findOne(+id);
  }
}
