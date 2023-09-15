import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';
import TipoEtapaCausa from 'src/catalogo/tipos-etapas-causas/entities/tipo-etapa-causa.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_tipos_actos_procesales_etapas_causas', ['id'], { unique: true })
@Entity('tipos_actos_procesales_etapas_causas', {
  schema: 'catalogo',
})
export default class TipoActoProcesalEtapaCausa extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column({ name: 'id_tipo_acto_procesal', nullable: false })
  idTipoActoProcesal: number;

  @ManyToOne(() => TipoActoProcesal, tiposActosProcesales => tiposActosProcesales.tiposActosProcesalesEtapasCausas)
  @JoinColumn({ name: 'id_tipo_acto_procesal', referencedColumnName: 'id' })
  tipoActoProcesal: TipoActoProcesal;

  @Column({ name: 'id_tipo_etapa', nullable: false })
  idTipoEtapa: number;

  @ManyToOne(() => TipoEtapaCausa, tiposEtapasCausas => tiposEtapasCausas.tiposActosProcesalesEtapasCausas)
  @JoinColumn({ name: 'id_tipo_etapa', referencedColumnName: 'id' })
  tipoEtapaCausa: TipoEtapaCausa;
}
