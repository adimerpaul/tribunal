import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMemorialeDto } from './dto/create-memoriale.dto';
import { UpdateMemorialeDto } from './dto/update-memoriale.dto';
import { MemorialesService } from './memoriales.service';

@Controller('memoriales')
@ApiTags('[Jurisdiccional] - Memoriales')
export class MemorialesController {
  constructor(private readonly memorialesService: MemorialesService) {}

  @Post()
  create(@Body() createMemorialeDto: CreateMemorialeDto) {
    return this.memorialesService.create(createMemorialeDto);
  }

  @Get()
  findAll() {
    return this.memorialesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memorialesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemorialeDto: UpdateMemorialeDto) {
    return this.memorialesService.update(+id, updateMemorialeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memorialesService.remove(+id);
  }
}
