import { Module } from '@nestjs/common';
import { TiposActosProcesalesAreasOrganizacionalesService } from './tipos-actos-procesales-areas-organizacionales.service';
import { TiposActosProcesalesAreasOrganizacionalesController } from './tipos-actos-procesales-areas-organizacionales.controller';
import { TipoActoProcesalAreaOrganizacionalRepository } from './repositories/tipo-acto-procesal-area-organizacional.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoActoProcesalAreaOrganizacionalRepository])],
  controllers: [TiposActosProcesalesAreasOrganizacionalesController],
  providers: [TiposActosProcesalesAreasOrganizacionalesService, TipoActoProcesalAreaOrganizacionalRepository],
  exports: [TiposActosProcesalesAreasOrganizacionalesService],
})
export class TiposActosProcesalesAreasOrganizacionalesModule {}
