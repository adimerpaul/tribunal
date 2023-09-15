import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Bien from 'src/jurisdiccional/bienes/entities/bien.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_situaciones_juridicas', ['id'], { unique: true })
@Entity('tipos_situaciones_juridicas', {
  schema: 'catalogo',
})
export default class TipoSituacionJuridica extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 30 })
  descripcion: string;

  @OneToMany(() => Bien, bienes => bienes.idSituacionJuridica)
  bienes: Bien[];
}
