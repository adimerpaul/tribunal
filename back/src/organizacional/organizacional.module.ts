import { Module } from '@nestjs/common';
import { OficinasModule } from './oficinas/oficinas.module';
import { EntesModule } from './entes/entes.module';
import { HorariosAtencionesModule } from './horarios-atenciones/horarios-atenciones.module';
import { OficinasFiscaliaModule } from './oficinas-fiscalia/oficinas-fiscalia.module';
import { CompetenciasFiscaliaModule } from './competencias-fiscalia/competencias-fiscalia.module';
import { AreasOrganizacionalesModule } from './areas-organizacionales/areas-organizacionales.module';
import { CompetenciasOrganizacionalesModule } from './competencias-organizacionales/competencias-organizacionales.module';
import { SalasAudienciasModule } from './salas-audiencias/salas-audiencias.module';
import { SalasAudienciasOficinasModule } from './salas-audiencias-oficinas/salas-audiencias-oficinas.module';
import { OficinasEstadosModule } from './oficinas-estados/oficinas-estados.module';
import { ZonasNotificacionesModule } from './zonas-notificaciones/zonas-notificaciones.module';
import { ZonasNotificacionesFuncionariosModule } from './zonas-notificaciones-funcionarios/zonas-notificaciones-funcionarios.module';
import { RecintosPenitenciariosModule } from './recintos-penitenciarios/recintos-penitenciarios.module';
import { CompetenciasTerritorialesModule } from './competencias-territoriales/competencias-territoriales.module';
import { CompetenciasGestorasModule } from './competencias-gestoras/competencias-gestoras.module';

@Module({
  imports: [
    OficinasModule,
    EntesModule,
    HorariosAtencionesModule,
    OficinasFiscaliaModule,
    CompetenciasFiscaliaModule,
    AreasOrganizacionalesModule,
    CompetenciasOrganizacionalesModule,
    SalasAudienciasModule,
    SalasAudienciasOficinasModule,
    OficinasEstadosModule,
    ZonasNotificacionesModule,
    ZonasNotificacionesFuncionariosModule,
    RecintosPenitenciariosModule,
    CompetenciasTerritorialesModule,
    CompetenciasGestorasModule,
  ],
})
export class OrganizacionalModule {}
