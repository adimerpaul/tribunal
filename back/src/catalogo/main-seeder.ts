import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { CategoriaActoProcesalSeeder } from './categorias-actos-procesales/seeds/categoria-acto-procesal-seeder';
import { DelitoDetalleSeeder } from './delitos-detalles/seeds/delito-detalle-seeder';
import { TipoActoProcesalAreaOrganizacionalSeeder } from './tipos-actos-procesales-areas-organizacionales/seeds/tipo-acto-procesal-area-organizacional-seeder';
import { TipoActoProcesalEstadoCausaSeeder } from './tipos-actos-procesales-estados-causas/seeds/tipo-acto-procesal-estado-causa-seeder';
import { TipoActoProcesalRolSeeder } from './tipos-actos-procesales-roles/seeds/tipo-acto-procesal-rol-seeder';
import { TipoActoProcesalSeeder } from './tipos-actos-procesales/seeds/tipo-acto-procesal-seeder';
import { TipoEstadoCausaSeeder } from './tipos-estados-causas/seeds/tipo-estado-causa-seeder';
import { TiposNivelEducacionSeeder } from './tipos-nivel-educacion/seeds/tipos-nivel-educacion-seeder';
import { GeneroSeeder } from './genero/seeds/genero.seeders';
import { TiposAudienciaSeeder } from './tipos-audiencias/seeds/tipos-audiencias-seeders';
import { TiposEtapasCausasSeeder } from './tipos-etapas-causas/seeds/tipos-etapas-causas-seeders';
import { TiposActosProcesalesTiposAudienciasSeeder } from './tipos-actos-procesales-tipos-audiencias/seeds/tipos-actos-procesales-tipos-audiencias-seeders';
import { TipoActosProcesalesTiposEtapasCausaSeeder } from './tipos-actos-procesales-etapas-causas/seeds/tipo-actos-procesales-tipos-etapas-causa-seeder';
import { TipoRiesgoProcesalSeeder } from './tipos-riesgos-procesales/seeds/tipo-riesgo-procesal-seeder';
import { GrupoDelitoSeeder } from './grupos-delitos/seeds/grupos-delitos-seeder';
import { SubgrupoDelitoSeeder } from './subgrupos-delitos/seeds/subgrupo-delito-seeder';
import { TipoEstadoAudienciaSeeder } from './tipos-estados-audiencias/seeds/tipo-estado--audiencia-seeder';
import { TipoSuspensionAudienciaSeeder } from './tipos-suspensiones-audiencias/seeds/tipo-suspension-audiencia-seeder';
import { TipoGradoDiscapacidadSeeder } from './tipos-grados-discapacidades/seeds/tipo-grado-discapacidad-seeder';
import { TipoGrupoVulnerableSeeder } from './tipos-grupos-vulnerables/seeds/tipo-grupo-vulnerable-seeder';
import { TipoIdentidadSeeder } from './tipos-identidades/seeds/tipo-identidad-seeder';
import { TipoRelacionVictimaSeeder } from './tipos-relaciones-victimas/seeds/tipo-relacion-victima-seeder';
import { TipoSeguimientoSeeder } from './tipos-seguimientos/seeds/tipo-seguimiento-seeder';
import { TipoSujetoProcesalSeeder } from './tipos-sujetos-procesales/seeds/tipos-sujetos-procesales-seeder';
import { MateriaSeeder } from './materias/seeds/materia-seeder';
import { FeriadoSeeder } from './feriados/seeds/feriado-seeder';

export class MainSeeder implements Seeder {
  track?: boolean;
  async run(dataSource: DataSource): Promise<any> {
    await runSeeder(dataSource, CategoriaActoProcesalSeeder);
    await runSeeder(dataSource, TipoRiesgoProcesalSeeder);
    await runSeeder(dataSource, TipoEstadoCausaSeeder);
    await runSeeder(dataSource, TipoActoProcesalSeeder);
    await runSeeder(dataSource, TipoActoProcesalEstadoCausaSeeder);
    await runSeeder(dataSource, TipoActoProcesalAreaOrganizacionalSeeder);
    await runSeeder(dataSource, TipoActoProcesalRolSeeder);
    await runSeeder(dataSource, TiposNivelEducacionSeeder);
    await runSeeder(dataSource, DelitoDetalleSeeder);
    await runSeeder(dataSource, GrupoDelitoSeeder);
    await runSeeder(dataSource, SubgrupoDelitoSeeder);

    await runSeeder(dataSource, GeneroSeeder);
    await runSeeder(dataSource, TiposAudienciaSeeder);
    await runSeeder(dataSource, TiposEtapasCausasSeeder);
    await runSeeder(dataSource, TiposActosProcesalesTiposAudienciasSeeder);
    await runSeeder(dataSource, TipoActosProcesalesTiposEtapasCausaSeeder);
    // Seeders MCardenas*/
    await runSeeder(dataSource, TipoEstadoAudienciaSeeder);
    await runSeeder(dataSource, TipoSuspensionAudienciaSeeder);
    await runSeeder(dataSource, TipoGradoDiscapacidadSeeder);
    await runSeeder(dataSource, TipoGrupoVulnerableSeeder);
    await runSeeder(dataSource, TipoIdentidadSeeder);
    await runSeeder(dataSource, TipoRelacionVictimaSeeder);
    await runSeeder(dataSource, TipoSeguimientoSeeder);
    await runSeeder(dataSource, TipoSujetoProcesalSeeder);
    await runSeeder(dataSource, MateriaSeeder);
    await runSeeder(dataSource, FeriadoSeeder);
  }
}
