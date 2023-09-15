import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';
import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_causas_precedentes', ['id'], { unique: true })
@Entity('causas_precedentes', { schema: 'jurisdiccional' })
export default class CausaPrecedente extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @ManyToOne(() => Causa, causa => causa.causaPrecedente, { lazy: true })
  @JoinColumn([{ name: 'id_causa', referencedColumnName: 'id' }])
  idCausa: Promise<Causa>;

  @ManyToOne(() => Causa, causas => causas.causaPrecedente2, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_causa_precedente', referencedColumnName: 'id' }])
  idCausaPrecedente: Promise<Causa>;
}
