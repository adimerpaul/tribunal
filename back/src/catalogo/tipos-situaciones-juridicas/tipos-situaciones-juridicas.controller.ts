import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposSituacionesJuridicasService } from './tipos-situaciones-juridicas.service';

@Controller('tipos-situaciones-juridicas')
@ApiTags('[Catálogo] - Tipos Situaciones Jurídicas')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposSituacionesJuridicasController {
  constructor(private readonly tiposSituacionesJuridicasService: TiposSituacionesJuridicasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Situaciones Juridicas',
    description: 'Retorna una lista de Tipos Situaciones Juridicas',
  })
  findAll() {
    return this.tiposSituacionesJuridicasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Situacion Juridica',
    description: 'Retorna un Tipo Situacion Juridica segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.tiposSituacionesJuridicasService.findOne(+id);
  }
}
