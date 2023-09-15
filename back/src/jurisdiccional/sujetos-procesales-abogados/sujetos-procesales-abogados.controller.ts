import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSujetosProcesalesAbogadoDto } from './dto/create-sujetos-procesales-abogado.dto';
import { UpdateSujetosProcesalesAbogadoDto } from './dto/update-sujetos-procesales-abogado.dto';
import { SujetosProcesalesAbogadosService } from './sujetos-procesales-abogados.service';

@Controller('sujetos-procesales-abogados')
@ApiTags('[Jurisdiccional] - Sujetos Procesales Abogados')
export class SujetosProcesalesAbogadosController {
  constructor(private readonly sujetosProcesalesAbogadosService: SujetosProcesalesAbogadosService) {}

  @Post()
  create(@Body() createSujetosProcesalesAbogadoDto: CreateSujetosProcesalesAbogadoDto) {
    return this.sujetosProcesalesAbogadosService.create(createSujetosProcesalesAbogadoDto);
  }

  @Get()
  findAll() {
    return this.sujetosProcesalesAbogadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sujetosProcesalesAbogadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSujetosProcesalesAbogadoDto: UpdateSujetosProcesalesAbogadoDto) {
    return this.sujetosProcesalesAbogadosService.update(+id, updateSujetosProcesalesAbogadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sujetosProcesalesAbogadosService.remove(+id);
  }
}
