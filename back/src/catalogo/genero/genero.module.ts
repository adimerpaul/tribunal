import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { GeneroRepository } from './repositories/genero.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genero])],
  controllers: [GeneroController],
  providers: [GeneroService, GeneroRepository],
  exports: [GeneroService],
})
export class GeneroModule {}
