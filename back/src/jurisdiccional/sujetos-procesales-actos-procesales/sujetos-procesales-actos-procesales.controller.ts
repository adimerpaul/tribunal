import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSujetosProcesalesActosProcesaleDto } from './dto/create-sujetos-procesales-actos-procesale.dto';
import { UpdateSujetosProcesalesActosProcesaleDto } from './dto/update-sujetos-procesales-actos-procesale.dto';
import { SujetosProcesalesActosProcesalesService } from './sujetos-procesales-actos-procesales.service';

@Controller('sujetos-procesales-actos-procesales')
@ApiTags('[Jurisdiccional] - Sujetos Procesales, Actos Procesales')
export class SujetosProcesalesActosProcesalesController {
  constructor(private readonly sujetosProcesalesActosProcesalesService: SujetosProcesalesActosProcesalesService) {}

  @Post()
  create(@Body() createSujetosProcesalesActosProcesaleDto: CreateSujetosProcesalesActosProcesaleDto) {
    return this.sujetosProcesalesActosProcesalesService.create(createSujetosProcesalesActosProcesaleDto);
  }

  @Get()
  findAll() {
    return this.sujetosProcesalesActosProcesalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sujetosProcesalesActosProcesalesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSujetosProcesalesActosProcesaleDto: UpdateSujetosProcesalesActosProcesaleDto,
  ) {
    return this.sujetosProcesalesActosProcesalesService.update(+id, updateSujetosProcesalesActosProcesaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sujetosProcesalesActosProcesalesService.remove(+id);
  }
}
