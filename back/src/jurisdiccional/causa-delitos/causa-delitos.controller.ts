import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CausaDelitosService } from './causa-delitos.service';
import { CreateCausaDelitoDto } from './dto/create-causa-delito.dto';
import { UpdateCausaDelitoDto } from './dto/update-causa-delito.dto';

@Controller('causa-delitos')
@ApiTags('[Jurisdiccional] - Causa Delitos')
export class CausaDelitosController {
  constructor(private readonly causaDelitosService: CausaDelitosService) {}

  @Post()
  create(@Body() createCausaDelitoDto: CreateCausaDelitoDto) {
    return this.causaDelitosService.create(createCausaDelitoDto);
  }

  @Get()
  findAll() {
    return this.causaDelitosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causaDelitosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCausaDelitoDto: UpdateCausaDelitoDto) {
    return this.causaDelitosService.update(+id, updateCausaDelitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causaDelitosService.remove(+id);
  }
}
