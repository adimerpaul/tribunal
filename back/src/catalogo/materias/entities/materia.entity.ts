import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import AreaOrganizacional from 'src/organizacional/areas-organizacionales/entities/area-organizacional.entity';

@Index('pk_materias', ['id'], { unique: true })
@Entity('materias', { schema: 'catalogo' })
export class Materia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 150 })
  descripcion: string;

  @OneToMany(() => AreaOrganizacional, areasOrganizacionales => areasOrganizacionales.materia)
  areasOrganizacionales: AreaOrganizacional[];
}
