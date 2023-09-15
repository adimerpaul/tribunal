import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';
import Documento from 'src/jurisdiccional/documentos/entities/documento.entity';
import Memorial from 'src/jurisdiccional/memoriales/entities/memorial.entity';
import Reparto from 'src/jurisdiccional/repartos/entities/reparto.entity';
import Reserva from 'src/jurisdiccional/reservas/entities/reserva.entity';
import ActoProcesalAdjunto from 'src/jurisdiccional/actos-procesales-adjuntos/entities/acto-procesal-adjunto.entity';
import ActoProcesalRespuesta from 'src/jurisdiccional/actos-procesales-respuestas/entities/acto-procesal-respuesta.entity';
import { Audiencia } from 'src/jurisdiccional/audiencias/entities/audiencia.entity';
import { SujetoProcesalActoProcesal } from 'src/jurisdiccional/sujetos-procesales-actos-procesales/entities/sujeto-procesal-acto-procesal.entity';
import { Notificacion } from 'src/jurisdiccional/notificaciones/entities/notificacion.entity';
import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';

@Index('pk_actos_procesales', ['id'], { unique: true })
@Entity('actos_procesales', { schema: 'jurisdiccional' })
export default class ActoProcesal extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int8', { name: 'id_acto_procesal_mp', nullable: true })
  idActoProcesalMp: number | null;

  @Column('int8', { name: 'id_tipo_acto_procesal', nullable: true })
  idTipoActoProcesal: number | null;

  @Column('character varying', {
    name: 'referencia',
    nullable: true,
    length: 250,
  })
  referencia: string | null;

  @Column('boolean', { name: 'cerrado', default: () => 'false' })
  cerrado: boolean;

  @Column('timestamp without time zone', {
    name: 'fecha_cierre',
    nullable: true,
  })
  fechaCierre: Date | null;

  @ManyToOne(() => Causa, causas => causas.actoProcesal, { lazy: true })
  @JoinColumn([{ name: 'id_causa', referencedColumnName: 'id' }])
  idCausa: Promise<Causa>;

  @ManyToOne(() => Documento, documento => documento.actoProcesal, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_documento', referencedColumnName: 'id' }])
  idDocumento: Promise<Documento>;

  @OneToMany(() => Memorial, memoriales => memoriales.idActoProcesal, {
    lazy: true,
  })
  memoriales: Promise<Memorial[]>;

  @OneToMany(() => Reparto, reparto => reparto.idActoProcesal, {
    lazy: true,
  })
  reparto: Promise<Reparto[]>;

  @OneToMany(() => Reserva, reserva => reserva.idActoProcesal, {
    lazy: true,
  })
  reserva: Promise<Reserva[]>;

  @OneToMany(() => ActoProcesalAdjunto, actoProcesalAdjunto => actoProcesalAdjunto.idActoProcesal, { lazy: true })
  actoProcesalAdjunto: Promise<ActoProcesalAdjunto[]>;

  @OneToMany(() => ActoProcesalAdjunto, actoProcesalAdjunto => actoProcesalAdjunto.idActoProcesalAdjunto, {
    lazy: true,
  })
  actoProcesalAdjunto2: Promise<ActoProcesalAdjunto[]>;

  @OneToMany(() => ActoProcesalRespuesta, actoProcesalRespuesta => actoProcesalRespuesta.idActoProcesal, { lazy: true })
  actoProcesalRespuesta: Promise<ActoProcesalRespuesta[]>;

  @OneToMany(() => ActoProcesalRespuesta, actoProcesalRespuesta => actoProcesalRespuesta.idActoProcesalRespuesta, {
    lazy: true,
  })
  actoProcesalRespuesta2: Promise<ActoProcesalRespuesta[]>;

  @OneToMany(() => Audiencia, audiencias => audiencias.idActoProcesal, {
    lazy: true,
  })
  audiencias: Promise<Audiencia[]>;

  @OneToMany(() => Notificacion, notificaciones => notificaciones.idActoProcesal)
  notificaciones: Notificacion[];

  @OneToMany(
    () => SujetoProcesalActoProcesal,
    sujetosProcesalesActosProcesales => sujetosProcesalesActosProcesales.idActoProcesal,
    { lazy: true },
  )
  sujetosProcesalesActosProcesales: Promise<SujetoProcesalActoProcesal[]>;

  @ManyToOne(() => TipoActoProcesal, tiposActosProcesales => tiposActosProcesales.actosProcesales)
  @JoinColumn([{ name: 'id_tipo_acto_procesal', referencedColumnName: 'id' }])
  tipoActoProcesal: TipoActoProcesal;
}
