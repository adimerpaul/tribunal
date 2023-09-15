import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autorizacion/auth/guards';
import { RecintosPenitenciariosService } from './recintos-penitenciarios.service';

@Controller('recintos-penitenciarios')
@UseGuards(JwtAuthGuard)
@ApiTags('[Organizacional] - Recintos Penitenciarios')
@ApiBearerAuth()
export class RecintosPenitenciariosController {
  constructor(private readonly recintosPenitenciariosService: RecintosPenitenciariosService) {}
  @Get()
  @ApiOperation({
    summary: 'Lista de recintos-penitenciarios',
    description: 'Retorna una lista de recintos-penitenciarios',
  })
  findAll() {
    return this.recintosPenitenciariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'obtiene la informacion de un recintos-penitenciarios',
    description: 'Retorna un recintos-penitenciarios segun al id',
  })
  findOne(@Param('id') id: string) {
    return this.recintosPenitenciariosService.findOne(+id);
  }
}
