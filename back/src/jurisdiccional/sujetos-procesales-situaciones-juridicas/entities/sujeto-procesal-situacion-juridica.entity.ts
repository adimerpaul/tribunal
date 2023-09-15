import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SujetoProcesal } from 'src/jurisdiccional/sujetos-procesales/entities/sujeto-procesal.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_sujetos_procesales_situaciones_juridicas', ['id'], { unique: true })
@Entity('sujetos_procesales_situaciones_juridicas', {
  schema: 'jurisdiccional',
})
export class SujetoProcesalSituacionJuridica extends AuditoriaEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('smallint', { name: 'id_tipo_situacion_juridica', nullable: true })
  idTipoSituacionJuridica: number | null;

  @Column('smallint', {
    name: 'id_sujeto_procesal_situacion_juridica_mp',
    nullable: true,
  })
  idSujetoProcesalSituacionJuridicaMp: number | null;

  @Column('date', { name: 'fecha_inicio' })
  fechaInicio: string;

  @Column('date', { name: 'fecha_fin', nullable: true })
  fechaFin: string | null;

  @ManyToOne(() => SujetoProcesal, sujetosProcesales => sujetosProcesales.sujetosProcesalesSituacionesJuridicas)
  @JoinColumn([{ name: 'id_sujeto_procesal', referencedColumnName: 'id' }])
  idSujetoProcesal: SujetoProcesal;
}
