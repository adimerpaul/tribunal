import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';
import TipoEstadoCausa from 'src/catalogo/tipos-estados-causas/entities/tipo-estado-causa.entity';

@Index('pk_tipos_actos_procesales_estados_causas', ['id'], { unique: true })
@Entity('tipos_actos_procesales_estados_causas', {
  schema: 'catalogo',
})
export default class TipoActoProcesalEstadoCausa extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int2', { name: 'id_tipo_acto_procesal', nullable: false })
  idTipoActoProcesal: number;

  @Column('int2', { name: 'id_tipo_estado', nullable: false })
  idTipoEstado: number;

  @ManyToOne(() => TipoActoProcesal, tiposActosProcesales => tiposActosProcesales.tiposActosProcesalesEstadosCausas, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_tipo_acto_procesal', referencedColumnName: 'id' }])
  tipoActoProcesal: Promise<TipoActoProcesal>;

  @ManyToOne(() => TipoEstadoCausa, tiposEstadosCausas => tiposEstadosCausas.tiposActosProcesalesEstadosCausas, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_tipo_estado', referencedColumnName: 'id' }])
  tipoEstado: Promise<TipoEstadoCausa>;
}
