import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_idiomas', ['id'], { unique: true })
@Entity('idiomas', { schema: 'catalogo' })
export default class Idioma extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 20 })
  descripcion: string;

  @Column('character varying', { name: 'abreviatura', nullable: true })
  abreviatura: string | null;
}
