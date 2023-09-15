import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_personas_juridicas', ['id'], { unique: true })
@Entity('personas_juridicas', { schema: 'identidad' })
export default class PersonaJuridica extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('bigint', { name: 'nit' })
  nit: string;

  @Column('character varying', { name: 'razon_social', length: 120 })
  razonSocial: string;

  @Column('character varying', {
    name: 'direccion',
    nullable: true,
    length: 250,
  })
  direccion: string | null;

  @Column('character varying', { name: 'telefono', nullable: true, length: 30 })
  telefono: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 150 })
  email: string | null;

  @Column('numeric', {
    name: 'latitud',
    nullable: true,
    precision: 10,
    scale: 8,
  })
  latitud: string | null;

  @Column('numeric', {
    name: 'longitud',
    nullable: true,
    precision: 10,
    scale: 8,
  })
  longitud: string | null;

  @ManyToOne(() => Persona, personas => personas.personasJuridicas, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_representante', referencedColumnName: 'id' }])
  idRepresentante: Promise<Persona>;

  // constructor(init?: Partial<PersonasJuridicas>) {
  //   super();
  //   Object.assign(this, init);
  // }
}
