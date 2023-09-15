import { PartialType } from '@nestjs/swagger';
import { CreateRecintosPenitenciarioDto } from './create-recintos-penitenciario.dto';

export class UpdateRecintosPenitenciarioDto extends PartialType(CreateRecintosPenitenciarioDto) {}
