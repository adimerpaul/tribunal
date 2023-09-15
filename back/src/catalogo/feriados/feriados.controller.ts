import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FeriadosService } from './feriados.service';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';

@Controller('feriados')
@ApiTags('[Catálogo] - Feriados')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class FeriadosController {
  constructor(private readonly feriadosService: FeriadosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de feriados',
    description: 'Retorna una lista de feriados',
  })
  findAll() {
    return this.feriadosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un feriado',
    description: 'Retorna un feriado segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.feriadosService.findOne(+id);
  }
}
