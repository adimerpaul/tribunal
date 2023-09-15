import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_estados_civiles', ['id'], { unique: true })
@Entity('tipos_estados_civiles', { schema: 'catalogo' })
export default class TipoEstadoCivil extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 20 })
  descripcion: string;

  @OneToMany(() => Persona, personas => personas.estadoCivil, {
    lazy: true,
  })
  personas: Promise<Persona[]>;
}
