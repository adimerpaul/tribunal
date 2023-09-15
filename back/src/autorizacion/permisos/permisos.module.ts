import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PermisosController } from './permisos.controller';
import { PermisosService } from './permisos.service';
import { PermisoEntity } from './entities/permiso.entity';
import { PermisoRepository } from './repositories/permiso.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PermisoEntity])],
  controllers: [PermisosController],
  providers: [PermisosService, PermisoRepository],
  exports: [PermisosService, PermisoRepository],
})
export class PermisosModule {}
