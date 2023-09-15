import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_personas_idiomas', ['id'], { unique: true })
@Entity('personas_idiomas', { schema: 'identidad' })
export default class PersonaIdioma extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'id_idioma' })
  idIdioma: number;

  @ManyToOne(() => Persona, personas => personas.personasIdiomas, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_persona', referencedColumnName: 'id' }])
  idPersona: Promise<Persona>;

  // constructor(init?: Partial<PersonasIdiomas>) {
  //   super();
  //   Object.assign(this, init);
  // }
}
