import { Module } from '@nestjs/common';
import { TiposActosProcesalesRolesService } from './tipos-actos-procesales-roles.service';
import { TiposActosProcesalesRolesController } from './tipos-actos-procesales-roles.controller';
import { TipoActoProcesalRolRepository } from './repositories/tipo-acto-procesal-rol.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoActoProcesalRolRepository])],
  controllers: [TiposActosProcesalesRolesController],
  providers: [TiposActosProcesalesRolesService, TipoActoProcesalRolRepository],
  exports: [TiposActosProcesalesRolesService],
})
export class TiposActosProcesalesRolesModule {}
