import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_grupos_vulnerables', ['id'], { unique: true })
@Entity('tipos_grupos_vulnerables', {
  schema: 'catalogo',
})
export default class TipoGrupoVulnerable extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 120 })
  descripcion: string;
}
