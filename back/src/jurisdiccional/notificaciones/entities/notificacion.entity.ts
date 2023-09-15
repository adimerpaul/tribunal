import TipoNotificacion from 'src/catalogo/tipos-notificaciones/entities/tipo-notificacion.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';
import Documento from 'src/jurisdiccional/documentos/entities/documento.entity';
import { NotificacionPersonal } from 'src/jurisdiccional/notificaciones-personales/entities/notificacion-personal.entity';
import { SujetoProcesal } from 'src/jurisdiccional/sujetos-procesales/entities/sujeto-procesal.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_notificaciones', ['id'], { unique: true })
@Entity('notificaciones', { schema: 'jurisdiccional' })
export class Notificacion extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('bigint', {
    name: 'numero',
  })
  numero: string;

  @Column('character varying', {
    name: 'observaciones',
    length: 500,
    default: () => "''",
  })
  observaciones: string;

  @Column('timestamp without time zone', {
    name: 'fecha_notificacion',
    nullable: true,
  })
  fechaNotificacion: Date | null;

  @Column('timestamp without time zone', {
    name: 'fecha_cierre',
    nullable: true,
  })
  fechaCierre: Date | null;

  @Column('boolean', { name: 'visto', default: () => 'false' })
  visto: boolean;

  @Column('timestamp without time zone', {
    name: 'fecha_visto',
    nullable: true,
  })
  fechaVisto: Date | null;

  // @ManyToOne(
  //   () => ActoProcesal,
  //   (actosProcesales) => actosProcesales.notificaciones,
  // )
  // @JoinColumn([{ name: 'id_acto_procesal', referencedColumnName: 'id' }])
  // idActoProcesal: ActoProcesal;

  // @ManyToOne(() => Documentos, (documentos) => documentos.notificaciones)
  // @JoinColumn([{ name: 'id_documento_cierre', referencedColumnName: 'id' }])
  // idDocumentoCierre: Documentos;

  // @ManyToOne(() => Documentos, (documentos) => documentos.notificaciones2)
  // @JoinColumn([{ name: 'id_documento_formulario', referencedColumnName: 'id' }])
  // idDocumentoFormulario: Documentos;

  @ManyToOne(() => SujetoProcesal, sujetoProcesal => sujetoProcesal.notificacion)
  @JoinColumn([{ name: 'id_sujeto_procesal', referencedColumnName: 'id' }])
  idSujetoProcesal: SujetoProcesal;

  @OneToMany(() => NotificacionPersonal, notificacionesPersonales => notificacionesPersonales.idNotificacion)
  notificacionesPersonales: NotificacionPersonal[];

  @ManyToOne(() => ActoProcesal, actosProcesales => actosProcesales.notificaciones)
  @JoinColumn([{ name: 'id_acto_procesal', referencedColumnName: 'id' }])
  idActoProcesal: ActoProcesal;

  @ManyToOne(() => Documento, documentos => documentos.notificaciones)
  @JoinColumn([{ name: 'id_documento_cierre', referencedColumnName: 'id' }])
  idDocumentoCierre: Documento;

  @ManyToOne(() => Documento, documentos => documentos.notificaciones2)
  @JoinColumn([{ name: 'id_documento_formulario', referencedColumnName: 'id' }])
  idDocumentoFormulario: Documento;

  @ManyToOne(() => TipoNotificacion, tiposNotificaciones => tiposNotificaciones.notificaciones)
  @JoinColumn([{ name: 'id_tipo_notificacion', referencedColumnName: 'id' }])
  idTipoNotificacion: TipoNotificacion;

  @ManyToOne(() => Oficina, oficinas => oficinas.notificaciones)
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  idOficina: Oficina;
}
