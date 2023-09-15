import { Module } from '@nestjs/common';
import { ZonasNotificacionesFuncionariosService } from './zonas-notificaciones-funcionarios.service';
import { ZonasNotificacionesFuncionariosController } from './zonas-notificaciones-funcionarios.controller';
import { ZonaNotificacionFuncionarioRepository } from './repositories/zona-notificacion-funcionario.repository';

@Module({
  controllers: [ZonasNotificacionesFuncionariosController],
  providers: [ZonasNotificacionesFuncionariosService, ZonaNotificacionFuncionarioRepository],
})
export class ZonasNotificacionesFuncionariosModule {}
