import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_feriados', ['id'], { unique: true })
@Entity('feriados', { schema: 'catalogo' })
export default class Feriado extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'id_departamento', nullable: true })
  idDepartamento: number | null;

  @Column('smallint', { name: 'id_municipio', nullable: true })
  idMunicipio: number | null;

  @Column('character varying', { name: 'descripcion', length: 250 })
  descripcion: string;

  @Column('date', { name: 'fecha_inicio', nullable: true })
  fechaInicio: string | null;

  @Column('date', { name: 'fecha_fin', nullable: true })
  fechaFin: string | null;

  @Column('boolean', { name: 'es_recurrente', default: () => 'false' })
  esRecurrente: boolean;

  @Column('boolean', { name: 'es_nacional', default: () => 'false' })
  esNacional: boolean;
}
