import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SubGrupoDelitosService } from './subgrupos-delitos.service';

@Controller('subgrupos-delitos')
@ApiTags('[Catálogo] - SubGruposDelitos')
export class SubGruposDelitosController {
  constructor(private readonly subGruposDelitosService: SubGrupoDelitosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de grupos delito',
    description: 'Retorna una lista de grupos delito',
  })
  findAll() {
    return this.subGruposDelitosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de una oficina',
    description: 'Retorna una oficina segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.subGruposDelitosService.findOne(+id);
  }
}
