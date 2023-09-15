import { PartialType } from '@nestjs/swagger';
import { CreateCausaDelitoDto } from './create-causa-delito.dto';

export class UpdateCausaDelitoDto extends PartialType(CreateCausaDelitoDto) {}
