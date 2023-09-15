import { Module } from '@nestjs/common';
import { RecintosPenitenciariosService } from './recintos-penitenciarios.service';
import { RecintosPenitenciariosController } from './recintos-penitenciarios.controller';
import { RecintoPenitenciarioRepository } from './repositories/recintos.repository';

@Module({
  controllers: [RecintosPenitenciariosController],
  providers: [RecintosPenitenciariosService, RecintoPenitenciarioRepository],
})
export class RecintosPenitenciariosModule {}
