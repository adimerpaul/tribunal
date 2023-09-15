import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { OficinasService } from './oficinas.service';

@Controller('oficinas')
@UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Oficinas')
@ApiBearerAuth()
export class OficinasController {
  constructor(private readonly oficinasService: OficinasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de oficinas',
    description: 'Retorna una lista de oficinas',
  })
  findAll() {
    return this.oficinasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una oficina',
    description: 'Retorna una oficina segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.oficinasService.findOne(+id);
  }
}
