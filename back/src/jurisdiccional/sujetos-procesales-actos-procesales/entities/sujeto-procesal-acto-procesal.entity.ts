import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SujetoProcesal } from 'src/jurisdiccional/sujetos-procesales/entities/sujeto-procesal.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';

@Index('pk_sujetos_procesales_actos_procesales', ['id'], { unique: true })
@Entity('sujetos_procesales_actos_procesales', {
  schema: 'jurisdiccional',
})
export class SujetoProcesalActoProcesal extends AuditoriaEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('integer', {
    name: 'sujetos_procesales_actos_procesales_mp',
  })
  sujetosProcesalesActosProcesalesMp: number;

  @ManyToOne(() => ActoProcesal, actosProcesales => actosProcesales.sujetosProcesalesActosProcesales)
  @JoinColumn([{ name: 'id_acto_procesal', referencedColumnName: 'id' }])
  idActoProcesal: ActoProcesal;

  @ManyToOne(() => SujetoProcesal, sujetosProcesales => sujetosProcesales.sujetosProcesalesActosProcesales)
  @JoinColumn([{ name: 'id_sujeto_procesal', referencedColumnName: 'id' }])
  idSujetoProcesal: SujetoProcesal;
}
