import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { CreateTipoActoProcesalDto } from './dto/create-tipo-acto-procesal.dto';
import { TiposActosProcesalesService } from './tipos-actos-procesales.service';

@Controller('tipos-actos-procesales')
@UseGuards(JwtAuthGuard)
@ApiTags('[Catálogo] - Tipos de Actos Procesales')
@ApiBearerAuth()
export class TiposActosProcesalesController {
  constructor(private readonly tiposActosProcesalesService: TiposActosProcesalesService) {}

  @Get()
  @ApiOperation({
    summary: 'Permite obtener la lista de tipos actos procesales',
    description: ' Obtiene lista de tipos actos procesales',
  })
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.tiposActosProcesalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tiposActosProcesalesService.findOne(+id);
  }

  @Post()
  @ApiOperation({
    summary: 'Permite realizar el registrar de un tipo acto procesal.',
    description: ' Crear un registro de un tipo acto procesal.',
  })
  create(@Body() tipoActoProcesal: CreateTipoActoProcesalDto) {
    return this.tiposActosProcesalesService.create(tipoActoProcesal);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Permite eliminar el tipo acto procesal.',
    description: ' Elimina el tipo acto procesal.',
  })
  remove(@Param('id') id: number) {
    return this.tiposActosProcesalesService.remove(+id);
  }
}
