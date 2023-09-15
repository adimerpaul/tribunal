import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { UsuariosRepository } from './repositories/usuarios.repository';
import { PersonasRepository } from 'src/identidad/personas/repositories/personas.repository';
import { PersonasModule } from 'src/identidad/personas/personas.module';
import { RolesModule } from 'src/autorizacion/roles/roles.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosRepository]), PersonasModule, RolesModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosRepository, PersonasRepository],
  exports: [UsuariosService],
})
export class UsuariosModule {}
