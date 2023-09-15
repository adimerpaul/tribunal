import { Module } from '@nestjs/common';
import { AreasOrganizacionalesService } from './areas-organizacionales.service';
import { AreasOrganizacionalesController } from './areas-organizacionales.controller';
import { AreaOrganizacionalRepository } from './repositories/area-organizacional.repository';

@Module({
  controllers: [AreasOrganizacionalesController],
  providers: [AreasOrganizacionalesService, AreaOrganizacionalRepository],
})
export class AreasOrganizacionalesModule {}
