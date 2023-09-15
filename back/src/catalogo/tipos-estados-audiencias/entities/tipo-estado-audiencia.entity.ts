import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { AudienciaDetalle } from 'src/jurisdiccional/audiencias-detalles/entities/audiencia-detalle.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_estados_audiencias', ['id'], { unique: true })
@Entity('tipos_estados_audiencias', {
  schema: 'catalogo',
})
export default class TipoEstadoAudiencia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 30 })
  descripcion: string;
  @OneToMany(() => AudienciaDetalle, audienciasDetalles => audienciasDetalles.idEstadoAudiencia)
  audienciasDetalles: AudienciaDetalle[];
}
