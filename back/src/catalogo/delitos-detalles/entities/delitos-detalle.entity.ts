import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Delito from 'src/catalogo/delitos/entities/delito.entity';

@Index('pk_delitos_detalles', ['id'], { unique: true })
@Entity('delitos_detalles', { schema: 'catalogo' })
export default class DelitoDetalle extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'tipo', length: 10, nullable: true })
  tipo: string;

  @Column('character varying', {
    name: 'descripcion',
    length: 5000,
    nullable: true,
  })
  descripcion: string;

  @Column('character varying', {
    name: 'ley_normativa',
    length: 100,
    nullable: true,
  })
  leyNormativa: string;

  @ManyToOne(() => Delito, delitos => delitos.delitosDetalles, {
    lazy: true,
  })
  @Column({ name: 'id_delito', nullable: false })
  idDelito: number;

  @ManyToOne(() => Delito, delito => delito.delitosDetalles)
  @JoinColumn({ name: 'id_delito', referencedColumnName: 'id' })
  delito: Delito;
}
