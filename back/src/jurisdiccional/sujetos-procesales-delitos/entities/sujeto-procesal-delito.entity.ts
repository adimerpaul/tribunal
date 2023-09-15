import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SujetoProcesal } from 'src/jurisdiccional/sujetos-procesales/entities/sujeto-procesal.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_sujetos_procesales_delitos', ['id'], { unique: true })
@Entity('sujetos_procesales_delitos', {
  schema: 'jurisdiccional',
})
export class SujetoProcesalDelito extends AuditoriaEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('smallint', { name: 'id_delito', nullable: true })
  idDelito: number | null;

  @Column('bigint', { name: 'id_sujeto_procesal_delito_mp', nullable: true })
  idSujetoProcesalDelitoMp: string | null;

  @Column('bigint', { name: 'id_delito_precedente', nullable: true })
  idDelitoPrecedente: string | null;

  @Column('boolean', {
    name: 'es_tentativo',
    nullable: true,
    default: () => 'false',
  })
  esTentativo: boolean | null;

  @Column('boolean', {
    name: 'tiene_agravante',
    nullable: true,
    default: () => 'false',
  })
  tieneAgravante: boolean | null;

  @Column('boolean', {
    name: 'tiene_atenuante',
    nullable: true,
    default: () => 'false',
  })
  tieneAtenuante: boolean | null;

  @ManyToOne(() => SujetoProcesal, sujetosProcesales => sujetosProcesales.sujetosProcesalesDelitos)
  @JoinColumn([{ name: 'id_sujeto_procesal', referencedColumnName: 'id' }])
  idSujetoProcesal: SujetoProcesal;
}
