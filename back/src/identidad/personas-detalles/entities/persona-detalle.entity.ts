import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';

@Index('pk_persona_detalles', ['id'], { unique: true })
@Entity('persona_detalles', { schema: 'identidad' })
export default class PersonaDetalle extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'id_genero', nullable: true })
  idGenero: number | null;

  @Column('smallint', { name: 'id_auto_identificacion', nullable: true })
  idAutoIdentificacion: number | null;

  @Column('smallint', { name: 'id_nivel_educacion', nullable: true })
  idNivelEducacion: number | null;

  @Column('smallint', { name: 'id_grupo_vulnerable', nullable: true })
  idGrupoVulnerable: number | null;

  @Column('smallint', { name: 'id_grado_discapacidad', nullable: true })
  idGradoDiscapacidad: number | null;

  @Column('smallint', { name: 'id_pais_celular', nullable: true })
  idPaisCelular: number | null;

  @Column('character varying', { name: 'telefono', nullable: true, length: 30 })
  telefono: string | null;

  @Column('boolean', { name: 'esta_desaparecido', nullable: true })
  estaDesaparecido: boolean | null;

  @ManyToOne(() => Persona, personas => personas.personaDetalles, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_persona', referencedColumnName: 'id' }])
  idPersona: Promise<Persona>;

  // constructor(init?: Partial<PersonaDetalles>) {
  //   super();
  //   Object.assign(this, init);
  // }
}
