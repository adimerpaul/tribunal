import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import AreaOrganizacional from 'src/organizacional/areas-organizacionales/entities/area-organizacional.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';

@Index('pk_competencias_organizacionales', ['id'], { unique: true })
@Entity('competencias_organizacionales', {
  schema: 'organizacional',
})
export default class CompetenciaOrganizacional extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('character varying', {
    name: 'usuario_creacion',
    length: 20,
    default: () => 'SESSION_USER',
  })
  usuarioCreacion: string;

  @Column('int2', { name: 'id_area_organizacional' })
  idAreaOrganizacional: number;

  @Column('int2', { name: 'id_oficina' })
  idOficina: number;

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

  @ManyToOne(() => AreaOrganizacional, areasOrganizacionales => areasOrganizacionales.competenciasOrganizacionales, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_area_organizacional', referencedColumnName: 'id' }])
  areaOrganizacional: Promise<AreaOrganizacional>;

  @ManyToOne(() => Oficina, oficinas => oficinas.competenciasOrganizacionales, { lazy: true })
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  oficina: Promise<Oficina>;
}
