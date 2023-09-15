import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Pais from 'src/geografico/paises/entities/pais.entity';

@Index('pk_ciudades', ['id'], { unique: true })
@Entity('ciudades', {
  schema: 'geografico',
})
export default class Ciudad extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'codice', length: 8 })
  codice: string;

  @Column('character varying', {
    name: 'distrito',
    length: 50,
    nullable: true,
  })
  distrito: string;

  @Column('character varying', { name: 'descripcion', length: 50 })
  descripcion: string;

  @Column({ name: 'id_pais', nullable: false })
  idPais: number;

  @ManyToOne(() => Pais, (paises) => paises.ciudades)
  @JoinColumn({ name: 'id_pais', referencedColumnName: 'id' })
  pais: Pais;
}
