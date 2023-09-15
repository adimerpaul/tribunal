import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Pais from 'src/geografico/paises/entities/pais.entity';
import Provincia from 'src/geografico/provincias/entities/provincia.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';
import Ente from 'src/organizacional/entes/entities/ente.entity';

@Index('pk_departamentos', ['id'], { unique: true })
@Entity('departamentos', {
  schema: 'geografico',
})
export default class Departamento extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'sigla', length: 2 })
  sigla: string;

  @Column('character varying', { name: 'descripcion', length: 20 })
  descripcion: string;

  @Column({ name: 'id_pais', nullable: false })
  idPais: number;

  @ManyToOne(() => Pais, (paises) => paises.departamentos)
  @JoinColumn({ name: 'id_pais', referencedColumnName: 'id' })
  pais: Pais;

  @OneToMany(() => Provincia, provincias => provincias.departamento, {
    lazy: true,
  })
  provincias: Promise<Provincia[]>;

  @OneToMany(() => Persona, personas => personas.lugarExpedicion, {
    lazy: true,
  })
  personas: Promise<Persona[]>;

  @OneToMany(() => Ente, entes => entes.departamento)
  entes: Ente[];
}
