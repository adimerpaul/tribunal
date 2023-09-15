import { PartialType } from '@nestjs/swagger';
import { CreateZonasNotificacionesFuncionarioDto } from './create-zonas-notificaciones-funcionario.dto';

export class UpdateZonasNotificacionesFuncionarioDto extends PartialType(CreateZonasNotificacionesFuncionarioDto) {}
