import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Delito from 'src/catalogo/delitos/entities/delito.entity';
import GrupoDelito from 'src/catalogo/grupos-delitos/entities/grupos-delito.entity';
import { AuditoriaEntity } from '../../../common/entities/auditoria.entity';

@Index('pk_subgrupos_delitos', ['id'], { unique: true })
@Entity('subgrupos_delitos', { schema: 'catalogo' })
export default class SubgrupoDelito extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', {
    name: 'descripcion',
    length: 20,
    nullable: true,
  })
  descripcion: string;

  @OneToMany(() => Delito, (delitos) => delitos.idSubgrupoDelito, {
    lazy: true,
  })
  delitos: Promise<Delito[]>;

  @Column({ name: 'id_grupo_delito', nullable: false })
  idGrupoDelito: number;

  @ManyToOne(() => GrupoDelito, (grupoDelito) => grupoDelito.subgruposDelitos)
  @JoinColumn({ name: 'id_grupo_delito', referencedColumnName: 'id' })
  grupoDelito: GrupoDelito;

  constructor(init?: Partial<SubgrupoDelito>) {
    super();
    Object.assign(this, init);
  }
}
