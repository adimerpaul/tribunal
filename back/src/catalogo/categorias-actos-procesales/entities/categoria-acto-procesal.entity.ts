import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';

@Index('pk_categorias_actos_procesales', ['id'], { unique: true })
@Entity('categorias_actos_procesales', {
  schema: 'catalogo',
})
export default class CategoriaActoProcesal extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', {
    name: 'descripcion',
    nullable: true,
    length: 200,
  })
  descripcion: string | null;

  @OneToMany(() => TipoActoProcesal, tiposActosProcesales => tiposActosProcesales.categoria, { lazy: true })
  tiposActosProcesales: Promise<TipoActoProcesal[]>;
}
