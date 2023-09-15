import Delito from 'src/catalogo/delitos/entities/delito.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_causa_delitos', ['id'], { unique: true })
@Entity('causa_delitos', { schema: 'jurisdiccional' })
export default class CausaDelito extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int8', { name: 'id_causa_delito_mp', nullable: true })
  idCausaDelitoMp: number | null;

  @Column('boolean', { name: 'es_tentativo', nullable: true })
  esTentativo: boolean | null;

  @ManyToOne(() => Causa, causa => causa.causaDelito, { lazy: true })
  @JoinColumn([{ name: 'id_causa', referencedColumnName: 'id' }])
  idCausa: Promise<Causa>;

  @ManyToOne(() => Delito, delitos => delitos.causaDelitos)
  @JoinColumn([{ name: 'id_delito', referencedColumnName: 'id' }])
  idDelito: Delito;
}
