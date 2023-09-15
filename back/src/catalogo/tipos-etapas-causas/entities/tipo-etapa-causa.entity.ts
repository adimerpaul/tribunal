import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import TipoActoProcesalEtapaCausa from 'src/catalogo/tipos-actos-procesales-etapas-causas/entities/tipos-actos-procesales-etapas-causa.entity';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';

@Index('pk_tipos_etapas_causas', ['id'], { unique: true })
@Entity('tipos_etapas_causas', { schema: 'catalogo' })
export default class TipoEtapaCausa extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 30 })
  descripcion: string;

  @OneToMany(
    () => TipoActoProcesalEtapaCausa,
    tiposActosProcesalesEtapasCausas => tiposActosProcesalesEtapasCausas.idTipoEtapa,
    { lazy: true },
  )
  tiposActosProcesalesEtapasCausas: Promise<TipoActoProcesalEtapaCausa[]>;
  
  @OneToMany(() => Causa, causas => causas.idTipoEtapa)
  causas: Causa[];
}
