import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';
import TipoSituacionJuridica from 'src/catalogo/tipos-situaciones-juridicas/entities/tipo-situacion-juridica.entity';

@Index('pk_bienes', ['id'], { unique: true })
@Entity('bienes', { schema: 'jurisdiccional' })
export default class Bien extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int8', { name: 'id_causa_bien_mp', nullable: true })
  idCausaBienMp: string | null;

  @Column('character varying', { name: 'codigo', length: 10 })
  codigo: string;

  @Column('character varying', { name: 'descripcion', length: 150 })
  descripcion: string;

  @Column('character varying', {
    name: 'detalles',
    nullable: true,
    length: 250,
  })
  detalles: string | null;

  /*@Column('character varying', {
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
  estado: number;*/

  @ManyToOne(() => Causa, causa => causa.bienes, { lazy: true })
  @JoinColumn([{ name: 'id_causa', referencedColumnName: 'id' }])
  idCausa: Promise<Causa>;

  @ManyToOne(() => TipoSituacionJuridica, tiposSituacionesJuridicas => tiposSituacionesJuridicas.bienes)
  @JoinColumn([{ name: 'id_situacion_juridica', referencedColumnName: 'id' }])
  idSituacionJuridica: TipoSituacionJuridica;
}
