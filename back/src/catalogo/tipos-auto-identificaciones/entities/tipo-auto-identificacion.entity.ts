import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_auto_identificaciones', ['id'], { unique: true })
@Entity('tipos_auto_identificaciones', {
  schema: 'catalogo',
})
export default class TipoAutoIdentificacion extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 30 })
  descripcion: string;
}
