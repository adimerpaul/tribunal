import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import TipoActoProcesalTipoAudiencia from 'src/catalogo/tipos-actos-procesales-tipos-audiencias/entities/tipos-actos-procesales-tipos-audiencia.entity';
import { Audiencia } from 'src/jurisdiccional/audiencias/entities/audiencia.entity';

@Index('pk_tipos_audiencias', ['id'], { unique: true })
@Entity('tipos_audiencias', { schema: 'catalogo' })
export class TipoAudiencia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 150 })
  descripcion: string;

  @Column('smallint', { name: 'plazo_minimo', nullable: true })
  plazoMinimo: number;

  @Column('int2', { name: 'plazo_intermedio' })
  plazoIntermedio: number;

  @Column('smallint', { name: 'plazo_maximo', nullable: true })
  plazoMaximo: number;

  @Column('smallint', { name: 'duracion_minima', nullable: true })
  duracionMinima: number;

  @Column('smallint', { name: 'duracion_media', nullable: true })
  duracionMedia: number;

  @Column('smallint', { name: 'duracion_maxima', nullable: true })
  duracionMaxima: number;

  @Column('smallint', { name: 'sujetos', nullable: true })
  sujetos: number;

  @Column('smallint', { name: 'incremento', nullable: true })
  incremento: number;

  @Column('character varying', {
    name: 'ley_normativa',
    nullable: true,
    length: 100,
  })
  leyNormativa: string | null;

  @OneToMany(
    () => TipoActoProcesalTipoAudiencia,
    tiposActosProcesalesTiposAudiencias => tiposActosProcesalesTiposAudiencias.idTipoAudiencia,
    { lazy: true },
  )
  tiposActosProcesalesTiposAudiencias: Promise<TipoActoProcesalTipoAudiencia[]>;

  @OneToMany(() => Audiencia, audiencias => audiencias.idTipoAudiencia)
  audiencias: Audiencia[];

  constructor(data?: Partial<TipoAudiencia>) {
    super(data);
  }
}
