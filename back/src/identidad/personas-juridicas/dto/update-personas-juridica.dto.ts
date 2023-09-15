import { PartialType } from '@nestjs/swagger';
import { CreatePersonasJuridicaDto } from './create-personas-juridica.dto';

export class UpdatePersonasJuridicaDto extends PartialType(CreatePersonasJuridicaDto) {}
