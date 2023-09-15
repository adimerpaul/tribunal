export class TiposSujetosProcesale {}
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_sujetos_procesales', ['id'], { unique: true })
@Entity('tipos_sujetos_procesales', {
  schema: 'catalogo',
})
export default class TipoSujetoProcesal extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 120 })
  descripcion: string;

  @Column('character varying', { name: 'tipo', length: 50 })
  tipo: string;
}
