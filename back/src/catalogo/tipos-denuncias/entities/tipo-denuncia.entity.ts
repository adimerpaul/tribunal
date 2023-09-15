import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_denuncias', ['id'], { unique: true })
@Entity('tipos_denuncias', { schema: 'catalogo' })
export default class TipoDenuncia extends AuditoriaEntity {
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
    length: 30,
  })
  descripcion: string | null;

  @OneToMany(() => Causa, causas => causas.idTipoDenuncia)
  causas: Causa[];
}
