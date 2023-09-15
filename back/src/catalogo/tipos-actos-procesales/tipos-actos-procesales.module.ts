import { Module } from '@nestjs/common';
import { TiposActosProcesalesService } from './tipos-actos-procesales.service';
import { TiposActosProcesalesController } from './tipos-actos-procesales.controller';
import { TipoActoProcesalRepository } from './repositories/tipo-acto-procesal.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoActoProcesalRepository])],
  controllers: [TiposActosProcesalesController],
  providers: [TiposActosProcesalesService, TipoActoProcesalRepository],
  exports: [TiposActosProcesalesService],
})
export class TiposActosProcesalesModule {}
