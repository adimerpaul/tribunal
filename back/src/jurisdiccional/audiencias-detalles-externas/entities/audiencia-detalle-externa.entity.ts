import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { AudienciaDetalle } from 'src/jurisdiccional/audiencias-detalles/entities/audiencia-detalle.entity';

@Index('pk_audiencias_detalles_externas', ['id'], { unique: true })
@Entity('audiencias_detalles_externas', {
  schema: 'jurisdiccional',
})
export class AudienciaDetalleExterna extends AuditoriaEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('character varying', { name: 'descripcion', length: 200 })
  descripcion: string;

  @Column('character varying', { name: 'direccion', length: 250 })
  direccion: string;

  @Column('numeric', {
    name: 'latitud',
    precision: 15,
    scale: 8,
    default: () => '0',
  })
  latitud: string;

  @Column('numeric', {
    name: 'longitud',
    precision: 15,
    scale: 8,
    default: () => '0',
  })
  longitud: string;

  @Column('character varying', {
    name: 'usuario_creacion',
    length: 20,
    default: () => 'SESSION_USER',
  })
  usuarioCreacion: string;

  @Column('timestamp without time zone', {
    name: 'fecha_creacion',
    default: () => 'now()',
  })
  fechaCreacion: Date;

  @Column('character varying', {
    name: 'usuario_modificacion',
    length: 20,
    default: () => 'SESSION_USER',
  })
  usuarioModificacion: string;

  @Column('timestamp without time zone', {
    name: 'fecha_modificacion',
    default: () => 'now()',
  })
  fechaModificacion: Date;

  @Column('smallint', { name: 'estado', default: () => '1' })
  estado: number;

  @ManyToOne(() => AudienciaDetalle, audienciasDetalles => audienciasDetalles.audienciasDetallesExternas)
  @JoinColumn([{ name: 'id_audiencia_detalle', referencedColumnName: 'id' }])
  idAudienciaDetalle: AudienciaDetalle;
}
