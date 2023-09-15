import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CategoriasActosProcesalesService } from './categorias-actos-procesales.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
@Controller('categorias-actos-procesales')
@UseGuards(JwtAuthGuard)
@ApiTags('[Catálogo] - Categorías de Actos Procesales')
@ApiBearerAuth()
export class CategoriasActosProcesalesController {
  constructor(private readonly categoriasActosProcesalesService: CategoriasActosProcesalesService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de tipos actos procesales.',
    description: 'Retorna la lista de tipos actos procesales.',
  })
  findAll() {
    return this.categoriasActosProcesalesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene la información de un tipo acto procesal.',
    description: 'Retorna la información de un tipo acto procesal.',
  })
  findOne(@Param('id') id: number) {
    return this.categoriasActosProcesalesService.findOne(+id);
  }
}
