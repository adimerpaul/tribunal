import { Module } from '@nestjs/common';
import { CategoriasActosProcesalesModule } from './categorias-actos-procesales/categorias-actos-procesales.module';
import { CompetenciasDelitosModule } from './competencias-delitos/competencias-delitos.module';
import { DelitosDetallesModule } from './delitos-detalles/delitos-detalles.module';
import { DelitosModule } from './delitos/delitos.module';
import { FeriadosModule } from './feriados/feriados.module';
import { GruposDelitosModule } from './grupos-delitos/grupos-delitos.module';
import { IdiomasModule } from './idiomas/idiomas.module';
import { SubgruposDelitosModule } from './subgrupos-delitos/subgrupos-delitos.module';
import { TiposActosProcesalesModule } from './tipos-actos-procesales/tipos-actos-procesales.module';
import { TiposActosProcesalesAreasOrganizacionalesModule } from './tipos-actos-procesales-areas-organizacionales/tipos-actos-procesales-areas-organizacionales.module';
import { TiposActosProcesalesEstadosCausasModule } from './tipos-actos-procesales-estados-causas/tipos-actos-procesales-estados-causas.module';
import { TiposActosProcesalesEtapasCausasModule } from './tipos-actos-procesales-etapas-causas/tipos-actos-procesales-etapas-causas.module';
import { TiposActosProcesalesRolesModule } from './tipos-actos-procesales-roles/tipos-actos-procesales-roles.module';
import { TiposActosProcesalesTiposAudienciasModule } from './tipos-actos-procesales-tipos-audiencias/tipos-actos-procesales-tipos-audiencias.module';
import { TiposAudienciasModule } from './tipos-audiencias/tipos-audiencias.module';
import { TiposAutoIdentificacionesModule } from './tipos-auto-identificaciones/tipos-auto-identificaciones.module';
import { TiposCargosFuncionariosModule } from './tipos-cargos-funcionarios/tipos-cargos-funcionarios.module';
import { TiposDenunciasModule } from './tipos-denuncias/tipos-denuncias.module';
import { TiposEstadosAudienciasModule } from './tipos-estados-audiencias/tipos-estados-audiencias.module';
import { TiposEstadosCausasModule } from './tipos-estados-causas/tipos-estados-causas.module';
import { TiposEstadosCivilesModule } from './tipos-estados-civiles/tipos-estados-civiles.module';
import { TiposEtapasCausasModule } from './tipos-etapas-causas/tipos-etapas-causas.module';
import { TiposGradosDiscapacidadesModule } from './tipos-grados-discapacidades/tipos-grados-discapacidades.module';
import { TiposGruposVulnerablesModule } from './tipos-grupos-vulnerables/tipos-grupos-vulnerables.module';
import { TiposIdentidadesModule } from './tipos-identidades/tipos-identidades.module';
import { TiposMedidasProteccionModule } from './tipos-medidas-proteccion/tipos-medidas-proteccion.module';
import { TiposNotificacionesModule } from './tipos-notificaciones/tipos-notificaciones.module';
import { TiposPlantillasModule } from './tipos-plantillas/tipos-plantillas.module';
import { TiposRelacionesVictimasModule } from './tipos-relaciones-victimas/tipos-relaciones-victimas.module';
import { TiposRiesgosProcesalesModule } from './tipos-riesgos-procesales/tipos-riesgos-procesales.module';
import { TiposSeguimientosModule } from './tipos-seguimientos/tipos-seguimientos.module';
import { TiposSituacionesJuridicasModule } from './tipos-situaciones-juridicas/tipos-situaciones-juridicas.module';
import { TiposSujetosProcesalesModule } from './tipos-sujetos-procesales/tipos-sujetos-procesales.module';
import { TiposSuspensionesAudienciasModule } from './tipos-suspensiones-audiencias/tipos-suspensiones-audiencias.module';
import { MateriasModule } from './materias/materias.module';
import { TiposNivelEducacionModule } from './tipos-nivel-educacion/tipos-nivel-educacion.module';
import { GeneroModule } from './genero/genero.module';

@Module({
  imports: [
    CategoriasActosProcesalesModule,
    CompetenciasDelitosModule,
    DelitosDetallesModule,
    DelitosModule,
    FeriadosModule,
    GruposDelitosModule,
    IdiomasModule,
    SubgruposDelitosModule,
    TiposActosProcesalesModule,
    TiposActosProcesalesAreasOrganizacionalesModule,
    TiposActosProcesalesEstadosCausasModule,
    TiposActosProcesalesEtapasCausasModule,
    TiposActosProcesalesRolesModule,
    TiposActosProcesalesTiposAudienciasModule,
    TiposAudienciasModule,
    TiposAutoIdentificacionesModule,
    TiposCargosFuncionariosModule,
    TiposDenunciasModule,
    TiposEstadosAudienciasModule,
    TiposEstadosCausasModule,
    TiposEstadosCivilesModule,
    TiposEtapasCausasModule,
    TiposGradosDiscapacidadesModule,
    TiposGruposVulnerablesModule,
    TiposIdentidadesModule,
    TiposMedidasProteccionModule,
    TiposNotificacionesModule,
    TiposPlantillasModule,
    TiposRelacionesVictimasModule,
    TiposRiesgosProcesalesModule,
    TiposSeguimientosModule,
    TiposSituacionesJuridicasModule,
    TiposSujetosProcesalesModule,
    TiposSuspensionesAudienciasModule,
    MateriasModule,
    TiposNivelEducacionModule,
    GeneroModule,
  ],
})
export class CatalogoModule {}
