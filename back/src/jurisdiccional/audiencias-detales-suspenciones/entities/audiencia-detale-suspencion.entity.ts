import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AudienciaDetalle } from 'src/jurisdiccional/audiencias-detalles/entities/audiencia-detalle.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import TipoSuspencionAudiencia from 'src/catalogo/tipos-suspensiones-audiencias/entities/tipo-suspension-audiencia.entity';

@Index('pk_audiencias_detalles_suspenciones', ['id'], { unique: true })
@Entity('audiencias_detalles_suspenciones', {
  schema: 'jurisdiccional',
})
export class AudienciaDetalleSuspencion extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('character varying', {
    name: 'motivo',
    length: 150,
  })
  motivo: string;

  @ManyToOne(() => AudienciaDetalle, audienciasDetalles => audienciasDetalles.audienciasDetallesSuspenciones)
  @JoinColumn([{ name: 'id_audiencia_detalle', referencedColumnName: 'id' }])
  idAudienciaDetalle: AudienciaDetalle;

  @ManyToOne(
    () => TipoSuspencionAudiencia,
    tiposSuspencionesAudiencias => tiposSuspencionesAudiencias.audienciasDetallesSuspenciones,
  )
  @JoinColumn([{ name: 'id_tipo_suspencion_audiencia', referencedColumnName: 'id' }])
  idTipoSuspencionAudiencia: TipoSuspencionAudiencia;
}
