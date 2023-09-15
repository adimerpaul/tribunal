import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SujetoProcesal } from 'src/jurisdiccional/sujetos-procesales/entities/sujeto-procesal.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_sujetos_procesales_abogados', ['id'], { unique: true })
@Entity('sujetos_procesales_abogados', {
  schema: 'jurisdiccional',
})
export class SujetoProcesalAbogado extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('bigint', {
    name: 'id_abogado',
    nullable: true,
  })
  idAbogado: string | null;

  @ManyToOne(() => SujetoProcesal, sujetosProcesales => sujetosProcesales.sujetosProcesalesAbogados)
  @JoinColumn([{ name: 'id_sujeto_procesal', referencedColumnName: 'id' }])
  idSujetoProcesal: SujetoProcesal;
}
