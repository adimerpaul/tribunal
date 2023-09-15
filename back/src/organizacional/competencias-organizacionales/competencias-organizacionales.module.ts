import { Module } from '@nestjs/common';
import { CompetenciasOrganizacionalesService } from './competencias-organizacionales.service';
import { CompetenciasOrganizacionalesController } from './competencias-organizacionales.controller';
import { CompetenciaOrganizacionalRepository } from './repositories/competencia-organizacional.repository';

@Module({
  controllers: [CompetenciasOrganizacionalesController],
  providers: [CompetenciasOrganizacionalesService, CompetenciaOrganizacionalRepository],
})
export class CompetenciasOrganizacionalesModule {}
