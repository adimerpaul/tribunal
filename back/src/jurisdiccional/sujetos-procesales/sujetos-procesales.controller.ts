import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSujetosProcesaleDto } from './dto/create-sujetos-procesale.dto';
import { UpdateSujetosProcesaleDto } from './dto/update-sujetos-procesale.dto';
import { SujetosProcesalesService } from './sujetos-procesales.service';

@Controller('sujetos-procesales')
@ApiTags('[Jurisdiccional] - Sujetos Procesales')
export class SujetosProcesalesController {
  constructor(private readonly sujetosProcesalesService: SujetosProcesalesService) {}

  @Post()
  create(@Body() createSujetosProcesaleDto: CreateSujetosProcesaleDto) {
    return this.sujetosProcesalesService.create(createSujetosProcesaleDto);
  }

  @Get()
  findAll() {
    return this.sujetosProcesalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sujetosProcesalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSujetosProcesaleDto: UpdateSujetosProcesaleDto) {
    return this.sujetosProcesalesService.update(+id, updateSujetosProcesaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sujetosProcesalesService.remove(+id);
  }
}
