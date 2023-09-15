import { Module } from '@nestjs/common';
import { CategoriasActosProcesalesService } from './categorias-actos-procesales.service';
import { CategoriasActosProcesalesController } from './categorias-actos-procesales.controller';
import { CategoriaActoProcesalRepository } from './repositories/categoria-acto-procesal.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaActoProcesalRepository])],
  controllers: [CategoriasActosProcesalesController],
  providers: [CategoriasActosProcesalesService, CategoriaActoProcesalRepository],
  exports: [CategoriasActosProcesalesService],
})
export class CategoriasActosProcesalesModule {}
