import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSujetosProcesalesPrivacionesLibertadeDto } from './dto/create-sujetos-procesales-privaciones-libertade.dto';
import { UpdateSujetosProcesalesPrivacionesLibertadeDto } from './dto/update-sujetos-procesales-privaciones-libertade.dto';
import { SujetosProcesalesPrivacionesLibertadesService } from './sujetos-procesales-privaciones-libertades.service';

@Controller('sujetos-procesales-privaciones-libertades')
@ApiTags('[Jurisdiccional] - Sujetos Procesales Privaciones Libertades')
export class SujetosProcesalesPrivacionesLibertadesController {
  constructor(
    private readonly sujetosProcesalesPrivacionesLibertadesService: SujetosProcesalesPrivacionesLibertadesService,
  ) {}

  @Post()
  create(@Body() createSujetosProcesalesPrivacionesLibertadeDto: CreateSujetosProcesalesPrivacionesLibertadeDto) {
    return this.sujetosProcesalesPrivacionesLibertadesService.create(createSujetosProcesalesPrivacionesLibertadeDto);
  }

  @Get()
  findAll() {
    return this.sujetosProcesalesPrivacionesLibertadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sujetosProcesalesPrivacionesLibertadesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSujetosProcesalesPrivacionesLibertadeDto: UpdateSujetosProcesalesPrivacionesLibertadeDto,
  ) {
    return this.sujetosProcesalesPrivacionesLibertadesService.update(
      +id,
      updateSujetosProcesalesPrivacionesLibertadeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sujetosProcesalesPrivacionesLibertadesService.remove(+id);
  }
}
