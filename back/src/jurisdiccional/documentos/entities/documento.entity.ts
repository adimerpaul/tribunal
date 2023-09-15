import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';
import { Notificacion } from 'src/jurisdiccional/notificaciones/entities/notificacion.entity';
import { AudienciaDetalle } from 'src/jurisdiccional/audiencias-detalles/entities/audiencia-detalle.entity';

@Index('pk_documentos', ['id'], { unique: true })
@Entity('documentos', { schema: 'jurisdiccional' })
export default class Documento extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('character varying', { name: 'archivo', length: 250 })
  archivo: string;

  @Column('character varying', { name: 'extension', length: 5 })
  extension: string;

  @Column('character varying', { name: 'uuid', length: 50 })
  uuid: string;

  @Column('character varying', { name: 'hash', length: 250 })
  hash: string;

  @Column('int4', { name: 'paginas' })
  paginas: number;

  @Column('float4', { name: 'tamanio' })
  tamanio: number;

  @Column('boolean', { name: 'firmado', default: () => 'false' })
  firmado: boolean;

  @Column('boolean', { name: 'aprobado', default: () => 'false' })
  aprobado: boolean;

  /*
  @Column("character varying", {
      name: "usuario_creacion",
      length: 20,
      default: () => "SESSION_USER",
    })
    usuarioCreacion: string;
  
    @Column("timestamp without time zone", {
      name: "fecha_creacion",
      default: () => "now()",
    })
    fechaCreacion: Date;
  
    @Column("character varying", {
      name: "usuario_modificacion",
      length: 20,
      default: () => "SESSION_USER",
    })
    usuarioModificacion: string;
  
    @Column("timestamp without time zone", {
      name: "fecha_modificacion",
      default: () => "now()",
    })
    fechaModificacion: Date;
  
    @Column("smallint", { name: "estado", default: () => "1" })
    estado: number;
    */

  @OneToMany(() => ActoProcesal, actoProcesal => actoProcesal.idDocumento, {
    lazy: true,
  })
  actoProcesal: Promise<ActoProcesal[]>;

  @OneToMany(() => Notificacion, notificaciones => notificaciones.idDocumentoCierre)
  notificaciones: Notificacion[];

  @OneToMany(() => Notificacion, notificaciones => notificaciones.idDocumentoFormulario)
  notificaciones2: Notificacion[];

  @OneToMany(() => AudienciaDetalle, audienciasDetalles => audienciasDetalles.idArchivoTranscripcionVideograbacion, {
    lazy: true,
  })
  audienciasDetalles: Promise<AudienciaDetalle[]>;

  @OneToMany(() => AudienciaDetalle, audienciasDetalles => audienciasDetalles.idArchivoVideograbacion, { lazy: true })
  audienciasDetalles2: Promise<AudienciaDetalle[]>;
}
