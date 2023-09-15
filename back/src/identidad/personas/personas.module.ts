import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { UsuariosRepository } from 'src/autorizacion/usuarios/repositories/usuarios.repository';
import { PersonasRepository } from 'src/identidad/personas/repositories/personas.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PersonasRepository])],
  controllers: [PersonasController],
  providers: [PersonasService, UsuariosRepository, PersonasRepository],
  exports: [PersonasRepository, PersonasService],
})
export class PersonasModule {}
