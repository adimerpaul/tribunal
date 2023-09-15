import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { TiposDenunciasService } from './tipos-denuncias.service';

@Controller('tipos-denuncias')
@ApiTags('[Catálogo] - Tipos Denuncias')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TiposDenunciasController {
  constructor(private readonly TiposDenunciaService: TiposDenunciasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de Tipos Denuncia',
    description: 'Retorna una lista de Tipos Denuncia',
  })
  findAll() {
    return this.TiposDenunciaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un Tipo Denuncia',
    description: 'Retorna un Tipo Denuncia segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.TiposDenunciaService.findOne(+id);
  }
}
