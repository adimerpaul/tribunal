import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSujetosProcesalesSituacionesJuridicaDto } from './dto/create-sujetos-procesales-situaciones-juridica.dto';
import { UpdateSujetosProcesalesSituacionesJuridicaDto } from './dto/update-sujetos-procesales-situaciones-juridica.dto';
import { SujetosProcesalesSituacionesJuridicasService } from './sujetos-procesales-situaciones-juridicas.service';

@Controller('sujetos-procesales-situaciones-juridicas')
@ApiTags('[Jurisdiccional] - Sujetos Procesales, Situaciones Jurídicas')
export class SujetosProcesalesSituacionesJuridicasController {
  constructor(
    private readonly sujetosProcesalesSituacionesJuridicasService: SujetosProcesalesSituacionesJuridicasService,
  ) {}

  @Post()
  create(@Body() createSujetosProcesalesSituacionesJuridicaDto: CreateSujetosProcesalesSituacionesJuridicaDto) {
    return this.sujetosProcesalesSituacionesJuridicasService.create(createSujetosProcesalesSituacionesJuridicaDto);
  }

  @Get()
  findAll() {
    return this.sujetosProcesalesSituacionesJuridicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sujetosProcesalesSituacionesJuridicasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSujetosProcesalesSituacionesJuridicaDto: UpdateSujetosProcesalesSituacionesJuridicaDto,
  ) {
    return this.sujetosProcesalesSituacionesJuridicasService.update(+id, updateSujetosProcesalesSituacionesJuridicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sujetosProcesalesSituacionesJuridicasService.remove(+id);
  }
}
