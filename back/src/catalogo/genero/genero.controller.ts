import { Controller, Get, Param } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Catálogo - Géneros')
@Controller('genero')
@ApiBearerAuth()
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de géneros',
    description: 'Retorna lista de géneros',
  })
  findAll() {
    return this.generoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un genero',
    description: 'Retorna un genero según el id',
  })
  findOne(@Param('id') id: string) {
    return this.generoService.findOne(+id);
  }
}
