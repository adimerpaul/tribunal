import { Module } from '@nestjs/common';
import { TiposGruposVulnerablesService } from './tipos-grupos-vulnerables.service';
import { TiposGruposVulnerablesController } from './tipos-grupos-vulnerables.controller';
import { TipoGrupoVulnerableRepository } from './repositories/tipo-grupo-vulnerable.repository';

@Module({
  controllers: [TiposGruposVulnerablesController],
  providers: [TiposGruposVulnerablesService, TipoGrupoVulnerableRepository],
})
export class TiposGruposVulnerablesModule {}
