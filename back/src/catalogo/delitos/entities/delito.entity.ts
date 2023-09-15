import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import CompetenciaDelito from 'src/catalogo/competencias-delitos/entities/competencias-delito.entity';
import DelitoDetalle from 'src/catalogo/delitos-detalles/entities/delitos-detalle.entity';
import GrupoDelito from 'src/catalogo/grupos-delitos/entities/grupos-delito.entity';
import SubgrupoDelito from 'src/catalogo/subgrupos-delitos/entities/subgrupos-delito.entity';
import CausaDelito from 'src/jurisdiccional/causa-delitos/entities/causa-delito.entity';

@Index('pk_delitos', ['id'], { unique: true })
@Entity('delitos', { schema: 'catalogo' })
export default class Delito extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 5000 })
  descripcion: string;

  @Column('integer', { name: 'pena_minima', default: () => '0' })
  penaMinima: number;

  @Column('character varying', {
    name: 'pena_minima_unidad',
    nullable: true,
    length: 10,
  })
  penaMinimaUnidad: string | null;

  @Column('integer', { name: 'pena_maxima', default: () => '0' })
  penaMaxima: number;

  @Column('character varying', {
    name: 'pena_maxima_unidad',
    nullable: true,
    length: 10,
  })
  penaMaximaUnidad: string | null;

  @Column('character varying', { name: 'artilo', length: 50 })
  articulo: string;

  @Column('character varying', { name: 'ley_normativa', length: 100 })
  leyNormativa: string;

  @Column('boolean', { name: 'tiene_precedente', default: () => 'false' })
  tienePrecedente: boolean;

  @Column('character varying', { name: 'tipo_accion', length: 30 })
  tipoAccion: string;

  @Column('character varying', {
    name: 'tipo_sancion',
    nullable: true,
    length: 100,
  })
  tipoSancion: string | null;

  @Column('smallint', { name: 'prioridad_sorteo' })
  prioridadSorteo: number;

  @OneToMany(
    () => CompetenciaDelito,
    (competenciasDelitos) => competenciasDelitos.idDelito,
    { lazy: true },
  )
  competenciasDelitos: Promise<CompetenciaDelito[]>;

  @Column({ name: 'id_grupo_delito', nullable: false })
  idGrupoDelito: number;

  @ManyToOne(() => GrupoDelito, (grupoDelito) => grupoDelito.delitos)
  @JoinColumn({ name: 'id_grupo_delito', referencedColumnName: 'id' })
  grupoDelito: GrupoDelito;

  @Column({ name: 'id_subgrupo_delito', nullable: false })
  idSubgrupoDelito: number;

  @ManyToOne(() => SubgrupoDelito, (subGrupoDelito) => subGrupoDelito.delitos)
  @JoinColumn({ name: 'id_subgrupo_delito', referencedColumnName: 'id' })
  subGrupoDelito: SubgrupoDelito;

  @OneToMany(
    () => DelitoDetalle,
    (delitosDetalles) => delitosDetalles.idDelito,
    { lazy: true },
  )
  delitosDetalles: Promise<DelitoDetalle[]>;

  @OneToMany(() => CausaDelito, (causaDelitos) => causaDelitos.idDelito)
  causaDelitos: CausaDelito[];
}
