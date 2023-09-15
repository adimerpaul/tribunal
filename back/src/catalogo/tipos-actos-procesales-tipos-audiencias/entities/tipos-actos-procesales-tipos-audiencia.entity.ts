import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';
import { TipoAudiencia } from 'src/catalogo/tipos-audiencias/entities/tipos-audiencia.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_tipos_actos_procesales_tipos_audiencias', ['id'], { unique: true })
@Entity('tipos_actos_procesales_tipos_audiencias', {
  schema: 'catalogo',
})
export default class TipoActoProcesalTipoAudiencia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column({ name: 'id_tipo_acto_procesal', nullable: false })
  idTipoActoProcesal: number;

  @ManyToOne(() => TipoActoProcesal, tiposActosProcesales => tiposActosProcesales.tiposActosProcesalesTiposAudiencias)
  @JoinColumn({ name: 'id_tipo_acto_procesal', referencedColumnName: 'id' })
  tipoActoProcesal: TipoActoProcesal;

  @Column({ name: 'id_tipo_audiencia', nullable: false })
  idTipoAudiencia: number;

  @ManyToOne(() => TipoAudiencia, tiposAudiencias => tiposAudiencias.tiposActosProcesalesTiposAudiencias)
  @JoinColumn({ name: 'id_tipo_audiencia', referencedColumnName: 'id' })
  tipoAudiencia: TipoAudiencia;
}
