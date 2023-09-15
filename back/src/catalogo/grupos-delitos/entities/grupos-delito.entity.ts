import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Delito from 'src/catalogo/delitos/entities/delito.entity';
import SubgrupoDelito from 'src/catalogo/subgrupos-delitos/entities/subgrupos-delito.entity';

@Index('pk_grupos_delitos', ['id'], { unique: true })
@Entity('grupos_delitos', { schema: 'catalogo' })
export default class GrupoDelito extends AuditoriaEntity {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id' })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', {
    name: 'descripcion',
    length: 20,
    nullable: true,
  })
  descripcion: string;

  @Column('character varying', {
    name: 'usuario_creacion',
    length: 120,
    default: () => 'SESSION_USER',
  })
  usuarioCreacion: string;

  @OneToMany(() => Delito, delitos => delitos.idGrupoDelito, { lazy: true })
  delitos: Promise<Delito[]>;

  @OneToMany(() => SubgrupoDelito, subgruposDelitos => subgruposDelitos.idGrupoDelito, { lazy: true })
  subgruposDelitos: Promise<SubgrupoDelito[]>;
}
