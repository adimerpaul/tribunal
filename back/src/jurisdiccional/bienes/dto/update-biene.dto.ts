import { PartialType } from '@nestjs/swagger';
import { CreateBieneDto } from './create-biene.dto';

export class UpdateBieneDto extends PartialType(CreateBieneDto) {}
