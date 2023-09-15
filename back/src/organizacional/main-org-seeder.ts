import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { EnteSeeder } from './entes/seeds/ente-seeder';
import { AreaOrganizacionalSeeder } from './areas-organizacionales/seeds/area-organizacional-seeder';
import { OficinaSeeder } from './oficinas/seeds/oficina-seeder';
import { OficinaFiscaliaSeeder } from './oficinas-fiscalia/seeds/oficina-fiscalia-seeder';
import { CompetenciaOrganizacionalSeeder } from './competencias-organizacionales/seeds/competencia-organizacional-seeder';
import { CompetenciaGestoraSeeder } from './competencias-gestoras/seeds/competencia-gestora-seeder';
import { CompetenciaFiscaliaSeeder } from './competencias-fiscalia/seeds/competencia-fiscalia-seeder';
import { CompetenciaTerritorialSeeder } from './competencias-territoriales/seeds/competencia-territorial-seeder';
import { SalasAudienciasSeeder } from './salas-audiencias/seeds/salas-audiencias-seeders';
import { SalasAudienciasOficinasSeeder } from './salas-audiencias-oficinas/seeds/salas-audiencias-oficinas-seeders';
import { HorarioAtencionSeeder } from './horarios-atenciones/seeds/horario-atencion-seeder';
import { RecintoPenitenciarioSeeder } from './recintos-penitenciarios/seeds/reciento-penitenciario-seeder';

export class MainSeederOrg implements Seeder {
  track?: boolean;
  async run(dataSource: DataSource): Promise<any> {
    await runSeeder(dataSource, EnteSeeder);
    await runSeeder(dataSource, AreaOrganizacionalSeeder);
    await runSeeder(dataSource, OficinaSeeder);
    await runSeeder(dataSource, OficinaFiscaliaSeeder);
    await runSeeder(dataSource, CompetenciaGestoraSeeder);
    await runSeeder(dataSource, CompetenciaFiscaliaSeeder);
    await runSeeder(dataSource, CompetenciaOrganizacionalSeeder);
    await runSeeder(dataSource, CompetenciaTerritorialSeeder);
    await runSeeder(dataSource, HorarioAtencionSeeder);
    await runSeeder(dataSource, RecintoPenitenciarioSeeder);

    await runSeeder(dataSource, SalasAudienciasSeeder);
    await runSeeder(dataSource, SalasAudienciasOficinasSeeder);
  }
}
