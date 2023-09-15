import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Delito from 'src/catalogo/delitos/entities/delito.entity';
import AreaOrganizacional from 'src/organizacional/areas-organizacionales/entities/area-organizacional.entity';

@Index('pk_competencias_delitos', ['id'], { unique: true })
@Entity('competencias_delitos', { schema: 'catalogo' })
export default class CompetenciaDelito extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int2', { name: 'id_area_organizacional' })
  idAreaOrganizacional: number;

  @Column('smallint', { name: 'prioridad_sorteo' })
  prioridadSorteo: number;

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

  @ManyToOne(() => Delito, delitos => delitos.competenciasDelitos, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_delito', referencedColumnName: 'id' }])
  idDelito: Promise<Delito>;

  @ManyToOne(() => AreaOrganizacional, areasOrganizacionales => areasOrganizacionales.competenciasDelitos)
  @JoinColumn([{ name: 'id_area_organizacional', referencedColumnName: 'id' }])
  areasOrganizacionales: AreaOrganizacional;

  constructor(init?: Partial<CompetenciaDelito>) {
    super();
    Object.assign(this, init);
  }
}
