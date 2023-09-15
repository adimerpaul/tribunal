import { PartialType } from '@nestjs/swagger';
import { CreateHorariosAtencioneDto } from './create-horarios-atencione.dto';

export class UpdateHorariosAtencioneDto extends PartialType(CreateHorariosAtencioneDto) {}
