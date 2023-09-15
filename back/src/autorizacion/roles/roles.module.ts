import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RolRepository } from './repositories/rol.repository';
import { PermisoEntity } from '../permisos/entities/permiso.entity';
import { MenusModule } from '../menus/menus.module';
import { PermisosModule } from '../permisos/permisos.module';

@Module({
  imports: [TypeOrmModule.forFeature([RolRepository, PermisoEntity]), MenusModule, PermisosModule],
  controllers: [RolesController],
  providers: [RolesService, RolRepository],
  exports: [RolesService, RolRepository],
})
export class RolesModule {}
