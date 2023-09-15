import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActosProcesalesAdjuntosService } from './actos-procesales-adjuntos.service';
import { CreateActosProcesalesAdjuntoDto } from './dto/create-actos-procesales-adjunto.dto';
import { UpdateActosProcesalesAdjuntoDto } from './dto/update-actos-procesales-adjunto.dto';

@Controller('actos-procesales-adjuntos')
@ApiTags('[Jurisdiccional] - Actos Procesales Adjuntos')
export class ActosProcesalesAdjuntosController {
  constructor(private readonly actosProcesalesAdjuntosService: ActosProcesalesAdjuntosService) {}

  @Post()
  create(@Body() createActosProcesalesAdjuntoDto: CreateActosProcesalesAdjuntoDto) {
    return this.actosProcesalesAdjuntosService.create(createActosProcesalesAdjuntoDto);
  }

  @Get()
  findAll() {
    return this.actosProcesalesAdjuntosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actosProcesalesAdjuntosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActosProcesalesAdjuntoDto: UpdateActosProcesalesAdjuntoDto) {
    return this.actosProcesalesAdjuntosService.update(+id, updateActosProcesalesAdjuntoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actosProcesalesAdjuntosService.remove(+id);
  }
}
