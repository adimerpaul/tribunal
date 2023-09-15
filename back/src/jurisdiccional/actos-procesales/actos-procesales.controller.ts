import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActosProcesalesService } from './actos-procesales.service';
import { CreateActosProcesaleDto } from './dto/create-actos-procesale.dto';
import { UpdateActosProcesaleDto } from './dto/update-actos-procesale.dto';

@Controller('actos-procesales')
@ApiTags('[Jurisdiccional] - Actos Procesales')
export class ActosProcesalesController {
  constructor(private readonly actosProcesalesService: ActosProcesalesService) {}

  @Post()
  create(@Body() createActosProcesaleDto: CreateActosProcesaleDto) {
    return this.actosProcesalesService.create(createActosProcesaleDto);
  }

  @Get()
  findAll() {
    return this.actosProcesalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actosProcesalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActosProcesaleDto: UpdateActosProcesaleDto) {
    return this.actosProcesalesService.update(+id, updateActosProcesaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actosProcesalesService.remove(+id);
  }
}
