import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { AudienciaDetalleSuspencion } from 'src/jurisdiccional/audiencias-detales-suspenciones/entities/audiencia-detale-suspencion.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_suspenciones_audiencias', ['id'], { unique: true })
@Entity('tipos_suspenciones_audiencias', {
  schema: 'catalogo',
})
export default class TipoSuspencionAudiencia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 120 })
  descripcion: string;

  @OneToMany(
    () => AudienciaDetalleSuspencion,
    audienciasDetallesSuspenciones => audienciasDetallesSuspenciones.idTipoSuspencionAudiencia,
  )
  audienciasDetallesSuspenciones: AudienciaDetalleSuspencion[];
}
