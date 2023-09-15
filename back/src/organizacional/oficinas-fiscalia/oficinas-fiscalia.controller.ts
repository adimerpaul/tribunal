import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { OficinasFiscaliaService } from './oficinas-fiscalia.service';

@Controller('oficinas-fiscalia')
@UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Oficinas Fiscalia')
@ApiBearerAuth()
export class OficinasFiscaliaController {
  constructor(private readonly oficinasFiscaliaService: OficinasFiscaliaService) {}
  @Get()
  @ApiOperation({
    summary: 'Lista de oficinas fiscalia',
    description: 'Retorna una lista de oficinas fiscalia',
  })
  findAll() {
    return this.oficinasFiscaliaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una oficinas fiscalia',
    description: 'Retorna una oficinas fiscalia segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.oficinasFiscaliaService.findOne(+id);
  }
}
