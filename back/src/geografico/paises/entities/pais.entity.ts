import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Ciudad from 'src/geografico/ciudades/entities/ciudad.entity';
import Departamento from 'src/geografico/departamentos/entities/departamento.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';

@Index('pk_paises', ['id'], { unique: true })
@Entity('paises', {
  schema: 'geografico',
})
export default class Pais extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('character varying', { name: 'iso2', length: 2 })
  iso2: string;

  @Column('character varying', { name: 'iso3', length: 3 })
  iso3: string;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 50 })
  descripcion: string;

  @Column('character varying', { name: 'codigo_telefonico', length: 10 })
  codigoTelefonico: string | number;

  @OneToMany(() => Ciudad, ciudades => ciudades.pais, { lazy: true })
  ciudades: Promise<Ciudad[]>;

  @OneToMany(() => Departamento, departamentos => departamentos.pais)
  departamentos: Departamento[];

  @OneToMany(() => Persona, personas => personas.nacionalidad, {
    lazy: true,
  })
  personas: Promise<Persona[]>;
}
