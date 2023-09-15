import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Municipio from 'src/geografico/municipios/entities/municipio.entity';
import Departamento from 'src/geografico/departamentos/entities/departamento.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_provincias', ['id'], { unique: true })
@Entity('provincias', {
  schema: 'geografico',
})
export default class Provincia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'codice', length: 8 })
  codice: string | number;

  @Column('character varying', { name: 'descripcion' })
  descripcion: string;

  @OneToMany(() => Municipio, municipios => municipios.provincia, {
    lazy: true,
  })
  municipios: Promise<Municipio[]>;

  @Column({ name: 'id_departamento', nullable: false })
  idDepartamento: number;

  @ManyToOne(() => Departamento, (departamentos) => departamentos.provincias)
  @JoinColumn({ name: 'id_departamento', referencedColumnName: 'id' })
  departamento: Departamento;
}