export class PersonasDomicilio {}
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_persona_domicilios', ['id'], { unique: true })
@Entity('personas_domicilios', { schema: 'identidad' })
export default class PersonaDomicilio extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'id_pais', nullable: true })
  idPais: number | null;

  @Column('smallint', { name: 'id_municipio', nullable: true })
  idMunicipio: number | null;

  @Column('character varying', { name: 'tipo', length: 20 })
  tipo: string;

  @Column('character varying', {
    name: 'direccion',
    nullable: true,
    length: 250,
  })
  direccion: string | null;

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

  @ManyToOne(() => Persona, personas => personas.personaDomicilios, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_persona', referencedColumnName: 'id' }])
  idPersona: Promise<Persona>;

  // constructor(init?: Partial<PersonaDomicilios>) {
  //   super();
  //   Object.assign(this, init);
  // }
}
