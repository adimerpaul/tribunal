import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActosProcesalesRespuestasService } from './actos-procesales-respuestas.service';
import { CreateActosProcesalesRespuestaDto } from './dto/create-actos-procesales-respuesta.dto';
import { UpdateActosProcesalesRespuestaDto } from './dto/update-actos-procesales-respuesta.dto';

@Controller('actos-procesales-respuestas')
@ApiTags('[Jurisdiccional] - Actos Procesales Respuestas')
export class ActosProcesalesRespuestasController {
  constructor(private readonly actosProcesalesRespuestasService: ActosProcesalesRespuestasService) {}

  @Post()
  create(@Body() createActosProcesalesRespuestaDto: CreateActosProcesalesRespuestaDto) {
    return this.actosProcesalesRespuestasService.create(createActosProcesalesRespuestaDto);
  }

  @Get()
  findAll() {
    return this.actosProcesalesRespuestasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actosProcesalesRespuestasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActosProcesalesRespuestaDto: UpdateActosProcesalesRespuestaDto) {
    return this.actosProcesalesRespuestasService.update(+id, updateActosProcesalesRespuestaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actosProcesalesRespuestasService.remove(+id);
  }
}
