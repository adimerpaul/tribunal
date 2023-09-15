import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_seguimientos', ['id'], { unique: true })
@Entity('tipos_seguimientos', { schema: 'catalogo' })
export default class TipoSeguimiento extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'ambito', length: 30 })
  ambito: string;

  @Column('character varying', {
    name: 'descripcion',
    nullable: true,
    length: 100,
  })
  descripcion: string | null;
}
