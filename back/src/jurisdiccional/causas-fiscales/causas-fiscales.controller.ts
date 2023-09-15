import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CausasFiscalesService } from './causas-fiscales.service';
import { CreateCausasFiscaleDto } from './dto/create-causas-fiscale.dto';
import { UpdateCausasFiscaleDto } from './dto/update-causas-fiscale.dto';

@Controller('causas-fiscales')
@ApiTags('[Jurisdiccional] - Causas Fiscales')
export class CausasFiscalesController {
  constructor(private readonly causasFiscalesService: CausasFiscalesService) {}

  @Post()
  create(@Body() createCausasFiscaleDto: CreateCausasFiscaleDto) {
    return this.causasFiscalesService.create(createCausasFiscaleDto);
  }

  @Get()
  findAll() {
    return this.causasFiscalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causasFiscalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCausasFiscaleDto: UpdateCausasFiscaleDto) {
    return this.causasFiscalesService.update(+id, updateCausasFiscaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causasFiscalesService.remove(+id);
  }
}
