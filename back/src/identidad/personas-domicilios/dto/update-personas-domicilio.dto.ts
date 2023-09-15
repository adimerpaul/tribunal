import { PartialType } from '@nestjs/swagger';
import { CreatePersonasDomicilioDto } from './create-personas-domicilio.dto';

export class UpdatePersonasDomicilioDto extends PartialType(CreatePersonasDomicilioDto) {}
