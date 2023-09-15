import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_plantillas', ['id'], { unique: true })
@Entity('tipos_plantillas', { schema: 'catalogo' })
export default class TipoPlantilla extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('character varying', { name: 'nombre', length: 100 })
  nombre: string;

  @Column('character varying', { name: 'descripcion', length: 250 })
  descripcion: string;

  @Column('jsonb', { name: 'contenido' })
  contenido: object;
}
