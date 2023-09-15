import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GruposDelitosService } from './grupos-delitos.service';

@Controller('grupos-delitos')
@ApiTags('[Catálogo] - Grupos Delitos')
export class GruposDelitosController {
  constructor(private readonly gruposDelitosService: GruposDelitosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de grupos delito',
    description: 'Retorna una lista de grupos delito',
  })
  findAll() {
    return this.gruposDelitosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una oficina',
    description: 'Retorna una oficina segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.gruposDelitosService.findOne(+id);
  }
}
