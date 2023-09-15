import { PartialType } from '@nestjs/swagger';
import { CreateMemorialeDto } from './create-memoriale.dto';

export class UpdateMemorialeDto extends PartialType(CreateMemorialeDto) {}
