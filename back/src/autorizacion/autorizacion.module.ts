import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { MenusModule } from './menus/menus.module';
import { PermisosModule } from './permisos/permisos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuariosModule, RolesModule, MenusModule, PermisosModule, AuthModule],
})
export class AutorizacionModule {}
