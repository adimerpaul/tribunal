import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import TipoActoProcesalEstadoCausa from 'src/catalogo/tipos-actos-procesales-estados-causas/entities/tipos-actos-procesales-estados-causa.entity';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';

@Index('pk_tipos_estados_causas', ['id'], { unique: true })
@Entity('tipos_estados_causas', { schema: 'catalogo' })
export default class TipoEstadoCausa extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 100 })
  descripcion: string;

  @OneToMany(
    () => TipoActoProcesalEstadoCausa,
    tiposActosProcesalesEstadosCausas => tiposActosProcesalesEstadosCausas.tipoEstado,
    { lazy: true },
  )
  tiposActosProcesalesEstadosCausas: Promise<TipoActoProcesalEstadoCausa[]>;
  @OneToMany(() => Causa, causas => causas.idTipoEstado)
  causas: Causa[];
}
