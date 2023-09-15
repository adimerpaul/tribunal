import { Controller, Get, Param } from '@nestjs/common';
import { SegipService } from './segip.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import Persona from 'src/identidad/personas/entities/persona.entity';

@Controller('segip')
@ApiTags('[Interoperabilidad] - segip')
@ApiBearerAuth()
export class SegipController {
  constructor(private readonly segipService: SegipService) {}

  @Get('directo/:ci')
  @ApiOperation({
    summary: 'Consulta de la identidad de una persona por su Cedula de Identidad.',
  })
  consultaSegip(@Param('ci') ci: string): Promise<Persona> {
    return this.segipService.consultaPorCi(ci);
  }
}
