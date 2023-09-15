import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSujetosProcesalesDelitoDto } from './dto/create-sujetos-procesales-delito.dto';
import { UpdateSujetosProcesalesDelitoDto } from './dto/update-sujetos-procesales-delito.dto';
import { SujetosProcesalesDelitosService } from './sujetos-procesales-delitos.service';

@Controller('sujetos-procesales-delitos')
@ApiTags('[Jurisdiccional] - Sujetos Procesales, Delitos')
export class SujetosProcesalesDelitosController {
  constructor(private readonly sujetosProcesalesDelitosService: SujetosProcesalesDelitosService) {}

  @Post()
  create(@Body() createSujetosProcesalesDelitoDto: CreateSujetosProcesalesDelitoDto) {
    return this.sujetosProcesalesDelitosService.create(createSujetosProcesalesDelitoDto);
  }

  @Get()
  findAll() {
    return this.sujetosProcesalesDelitosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sujetosProcesalesDelitosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSujetosProcesalesDelitoDto: UpdateSujetosProcesalesDelitoDto) {
    return this.sujetosProcesalesDelitosService.update(+id, updateSujetosProcesalesDelitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sujetosProcesalesDelitosService.remove(+id);
  }
}
