import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Ente from 'src/organizacional/entes/entities/ente.entity';

@Index('pk_horarios_atenciones', ['id'], { unique: true })
@Entity('horarios_atenciones', { schema: 'organizacional' })
export default class HorarioAtencion extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('time without time zone', { name: 'hora_inicio_manana' })
  horaInicioManana: string;

  @Column('time without time zone', { name: 'hora_fin_manana' })
  horaFinManana: string;

  @Column('time without time zone', {
    name: 'hora_inicio_tarde',
    nullable: true,
  })
  horaInicioTarde: string | null;

  @Column('time without time zone', { name: 'hora_fin_tarde', nullable: true })
  horaFinTarde: string | null;

  @Column('boolean', { name: 'es_continuo', default: () => 'false' })
  esContinuo: boolean;

  @Column({ name: 'id_ente', nullable: false })
  idEnte: number;


  @ManyToOne(() => Ente, (entes) => entes.horariosAtenciones)
  @JoinColumn({ name: 'id_ente', referencedColumnName: 'id' })
  ente: Ente;
}
