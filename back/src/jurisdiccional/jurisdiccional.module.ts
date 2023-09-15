import { Module } from '@nestjs/common';
import { ActosProcesalesModule } from './actos-procesales/actos-procesales.module';
import { ActosProcesalesAdjuntosModule } from './actos-procesales-adjuntos/actos-procesales-adjuntos.module';
import { ActosProcesalesRespuestasModule } from './actos-procesales-respuestas/actos-procesales-respuestas.module';
import { AudienciasModule } from './audiencias/audiencias.module';
import { AudienciasDetalesSuspencionesModule } from './audiencias-detales-suspenciones/audiencias-detales-suspenciones.module';
import { AudienciasDetallesModule } from './audiencias-detalles/audiencias-detalles.module';
import { AudienciasDetallesExternasModule } from './audiencias-detalles-externas/audiencias-detalles-externas.module';
import { BienesModule } from './bienes/bienes.module';
import { CausaDelitosModule } from './causa-delitos/causa-delitos.module';
import { CausasModule } from './causas/causas.module';
import { CausasFiscalesModule } from './causas-fiscales/causas-fiscales.module';
import { CausasPrecedentesModule } from './causas-precedentes/causas-precedentes.module';
import { DocumentosModule } from './documentos/documentos.module';
import { MedidasProteccionModule } from './medidas-proteccion/medidas-proteccion.module';
import { MemorialesModule } from './memoriales/memoriales.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { NotificacionesPersonalesModule } from './notificaciones-personales/notificaciones-personales.module';
import { RepartosModule } from './repartos/repartos.module';
import { ReservasModule } from './reservas/reservas.module';
import { SujetosProcesalesModule } from './sujetos-procesales/sujetos-procesales.module';
import { SujetosProcesalesAbogadosModule } from './sujetos-procesales-abogados/sujetos-procesales-abogados.module';
import { SujetosProcesalesActosProcesalesModule } from './sujetos-procesales-actos-procesales/sujetos-procesales-actos-procesales.module';
import { SujetosProcesalesDelitosModule } from './sujetos-procesales-delitos/sujetos-procesales-delitos.module';
import { SujetosProcesalesPrivacionesLibertadesModule } from './sujetos-procesales-privaciones-libertades/sujetos-procesales-privaciones-libertades.module';
import { SujetosProcesalesSituacionesJuridicasModule } from './sujetos-procesales-situaciones-juridicas/sujetos-procesales-situaciones-juridicas.module';

@Module({
  imports: [
    ActosProcesalesModule,
    ActosProcesalesAdjuntosModule,
    ActosProcesalesRespuestasModule,
    AudienciasModule,
    AudienciasDetalesSuspencionesModule,
    AudienciasDetallesModule,
    AudienciasDetallesExternasModule,
    BienesModule,
    CausaDelitosModule,
    CausasModule,
    CausasFiscalesModule,
    CausasPrecedentesModule,
    DocumentosModule,
    MedidasProteccionModule,
    MemorialesModule,
    NotificacionesModule,
    NotificacionesPersonalesModule,
    RepartosModule,
    ReservasModule,
    SujetosProcesalesModule,
    SujetosProcesalesAbogadosModule,
    SujetosProcesalesActosProcesalesModule,
    SujetosProcesalesDelitosModule,
    SujetosProcesalesPrivacionesLibertadesModule,
    SujetosProcesalesSituacionesJuridicasModule,
  ],
})
export class JurisdiccionalModule {}
