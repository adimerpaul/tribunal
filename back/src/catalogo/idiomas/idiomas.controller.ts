import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IdiomasService } from './idiomas.service';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';

@Controller('idiomas')
@ApiTags('[Catálogo] - Idiomas')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class IdiomasController {
  constructor(private readonly idiomasService: IdiomasService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de idiomas',
    description: 'Retorna una lista de idiomas',
  })
  findAll() {
    return this.idiomasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un idioma',
    description: 'Retorna un idioma segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.idiomasService.findOne(+id);
  }
}
