import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SujetoProcesal } from 'src/jurisdiccional/sujetos-procesales/entities/sujeto-procesal.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import RecintoPenitenciario from 'src/organizacional/recintos-penitenciarios/entities/recinto-penitenciario.entity';

@Index('pk_sujetos_procesales_privaciones_libertades', ['id'], { unique: true })
@Entity('sujetos_procesales_privaciones_libertades', {
  schema: 'jurisdiccional',
})
export class SujetoProcesalPrivacionLibertad extends AuditoriaEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('smallint', { name: 'id_recinto_penitenciario', nullable: true })
  idRecintoPenitenciario: number | null;

  @Column('smallint', { name: 'id_riesgo_procesal', nullable: true })
  idRiesgoProcesal: number | null;

  @Column('smallint', { name: 'pena_quantum', nullable: true })
  penaQuantum: number | null;

  @Column('character varying', {
    name: 'pena_multa',
    nullable: true,
    length: 150,
  })
  penaMulta: string | null;

  @Column('character varying', {
    name: 'pena_trabajo',
    nullable: true,
    length: 150,
  })
  penaTrabajo: string | null;

  @Column('character varying', {
    name: 'pena_costas',
    nullable: true,
    length: 150,
  })
  penaCostas: string | null;

  @Column('date', { name: 'fecha_detencion', nullable: true })
  fechaDetencion: string | null;

  @Column('date', { name: 'fecha_ingreso_recinto', nullable: true })
  fechaIngresoRecinto: string | null;

  @ManyToOne(() => SujetoProcesal, sujetosProcesales => sujetosProcesales.sujetosProcesalesPrivacionesLibertades)
  @JoinColumn([{ name: 'id_sujeto_procesal', referencedColumnName: 'id' }])
  idSujetoProcesal: SujetoProcesal;
  @ManyToOne(
    () => RecintoPenitenciario,
    recintosPenitenciarios => recintosPenitenciarios.sujetosProcesalesPrivacionesLibertades,
  )
  @JoinColumn([{ name: 'id_recinto_penitenciario', referencedColumnName: 'id' }])
  recintoPenitenciario: RecintoPenitenciario;
}
