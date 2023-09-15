import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DelitosService } from './delitos.service';

@Controller('delitos')
@ApiTags('[Catálogo] - Delitos')
export class DelitosController {
  constructor(private readonly delitosService: DelitosService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de delitos',
    description: 'Retorna una lista de delitos',
  })
  findAll() {
    return this.delitosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un delito',
    description: 'Retorna unm delito segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.delitosService.findOne(+id);
  }
}
