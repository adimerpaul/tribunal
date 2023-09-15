import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposSujetosProcesalesService } from './tipos-sujetos-procesales.service';

@Controller('tipos-sujetos-procesales')
@ApiTags('[Catálogo] - Tipos Sujetos Procesales')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposSujetosProcesalesController {
  constructor(private readonly tiposSujetosProcesalesService: TiposSujetosProcesalesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Sujetos Procesales',
    description: 'Retorna una lista de Tipos Sujetos Procesales',
  })
  findAll() {
    return this.tiposSujetosProcesalesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo de Sujeto Procesal',
    description: 'Retorna un Tipo de Sujeto Procesal segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposSujetosProcesalesService.findOne(+id);
  }
}
