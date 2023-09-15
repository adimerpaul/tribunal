import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_abogados', ['id'], { unique: true })
@Entity('abogados', { schema: 'identidad' })
export default class Abogado extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;
  @Column('character varying', { name: 'matricula', length: 20 })
  matricula: string;

  @Column('date', { name: 'fecha_registo' })
  fechaRegisto: string;

  @Column('character varying', { name: 'estado_registo', length: 15 })
  estadoRegisto: string;

  @Column('character varying', { name: 'fotografia', length: 250 })
  fotografia: string;

  @Column('date', { name: 'fecha_vencimiento_matricula', nullable: true })
  fechaVencimientoMatricula: string | null;

  @ManyToOne(() => Persona, personas => personas.abogados, { lazy: true })
  @JoinColumn([{ name: 'id_persona', referencedColumnName: 'id' }])
  idPersona: Promise<Persona>;

  // constructor(init?: Partial<Abogados>) {
  //   super();
  //   Object.assign(this, init);
  // }
}
