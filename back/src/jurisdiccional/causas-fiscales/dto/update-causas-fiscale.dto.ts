import { PartialType } from '@nestjs/swagger';
import { CreateCausasFiscaleDto } from './create-causas-fiscale.dto';

export class UpdateCausasFiscaleDto extends PartialType(CreateCausasFiscaleDto) {}
