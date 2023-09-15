import CompetenciaDelito from 'src/catalogo/competencias-delitos/entities/competencias-delito.entity';
import { Materia } from 'src/catalogo/materias/entities/materia.entity';
import TipoActoProcesalAreaOrganizacional from 'src/catalogo/tipos-actos-procesales-areas-organizacionales/entities/tipos-actos-procesales-areas-organizacionale.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import CompetenciaOrganizacional from 'src/organizacional/competencias-organizacionales/entities/competencia-organizacional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_areas_organizacionales', ['id'], { unique: true })
@Entity('areas_organizacionales', {
  schema: 'organizacional',
})
export default class AreaOrganizacional extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('character varying', { name: 'descripcion', length: 250 })
  descripcion: string;

  @Column('int2', { name: 'id_materia', nullable: true })
  idMateria: number;

  @Column('smallint', { name: 'nivel_sorteo' })
  nivelSorteo: number;

  @ManyToOne(() => Materia, materia => materia.areasOrganizacionales, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_materia', referencedColumnName: 'id' }])
  materia: Promise<Materia>;

  @OneToMany(
    () => CompetenciaOrganizacional,
    competenciasOrganizacionales => competenciasOrganizacionales.areaOrganizacional,
    { lazy: true },
  )
  competenciasOrganizacionales: Promise<CompetenciaOrganizacional[]>;

  @OneToMany(() => CompetenciaDelito, competenciasDelitos => competenciasDelitos.areasOrganizacionales)
  competenciasDelitos: CompetenciaDelito[];

  @OneToMany(
    () => TipoActoProcesalAreaOrganizacional,
    tiposActosProcesalesAreasOrganizacionales => tiposActosProcesalesAreasOrganizacionales.areaOrganizacional,
  )
  tiposActosProcesalesAreasOrganizacionales: TipoActoProcesalAreaOrganizacional[];
}
