import { PartialType } from '@nestjs/swagger';
import { CreatePersonasIdiomaDto } from './create-personas-idioma.dto';

export class UpdatePersonasIdiomaDto extends PartialType(CreatePersonasIdiomaDto) {}
