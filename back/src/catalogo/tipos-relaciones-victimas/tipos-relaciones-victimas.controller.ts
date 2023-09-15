import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposRelacionesVictimasService } from './tipos-relaciones-victimas.service';

@Controller('tipos-relaciones-victimas')
@ApiTags('[Catálogo] - Tipos Relaciones Victimas')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposRelacionesVictimasController {
  constructor(private readonly tiposRelacionesVictimasService: TiposRelacionesVictimasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Relaciones Victimas',
    description: 'Retorna una lista de Tipos Relaciones Victimas',
  })
  findAll() {
    return this.tiposRelacionesVictimasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Estado Causa',
    description: 'Retorna un Tipo Estado Causa segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposRelacionesVictimasService.findOne(+id);
  }
}
