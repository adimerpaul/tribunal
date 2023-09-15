import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { SalasAudienciasOficinasService } from './salas-audiencias-oficinas.service';

@Controller('salas-audiencias-oficinas')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('[Organizacional] - Salas de Audiencias, Oficinas')
export class SalasAudienciasOficinasController {
  constructor(private readonly salasAudienciasOficinasService: SalasAudienciasOficinasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de alasAudienciasOficinas',
    description: 'Retorna una lista de alasAudienciasOficinas',
  })
  findAll() {
    return this.salasAudienciasOficinasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una alasAudienciasOficinas',
    description: 'Retorna una alasAudienciasOficinas segun al id',
  })
  findOne(@Param('id') id: number) {
    return this.salasAudienciasOficinasService.findOne(+id);
  }
}
