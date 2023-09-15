import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import TipoEstadoAudiencia from 'src/catalogo/tipos-estados-audiencias/entities/tipo-estado-audiencia.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { AudienciaDetalleSuspencion } from 'src/jurisdiccional/audiencias-detales-suspenciones/entities/audiencia-detale-suspencion.entity';
import { AudienciaDetalleExterna } from 'src/jurisdiccional/audiencias-detalles-externas/entities/audiencia-detalle-externa.entity';
import { Audiencia } from 'src/jurisdiccional/audiencias/entities/audiencia.entity';
import Documento from 'src/jurisdiccional/documentos/entities/documento.entity';
import SalaAudiencia from 'src/organizacional/salas-audiencias/entities/sala-audiencia.entity';

@Index('pk_audiencias_detalles', ['id'], { unique: true })
@Entity('audiencias_detalles', { schema: 'jurisdiccional' })
export class AudienciaDetalle extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('character varying', { name: 'modalidad', length: 10 })
  modalidad: string;

  @Column('timestamp without time zone', { name: 'fecha_hora_inicio' })
  fechaHoraInicio: Date;

  @Column('timestamp without time zone', { name: 'fecha_hora_fin' })
  fechaHoraFin: Date;

  @Column('timestamp without time zone', {
    name: 'fecha_hora_inicio_grabacion',
  })
  fechaHoraInicioGrabacion: Date;

  @Column('timestamp without time zone', { name: 'duracion_grabacion' })
  duracionGrabacion: Date;

  @ManyToOne(() => Documento, documentos => documentos.audienciasDetalles)
  @JoinColumn([
    {
      name: 'id_archivo_transcripcion_videograbacion',
      referencedColumnName: 'id',
    },
  ])
  idArchivoTranscripcionVideograbacion: Documento;

  @ManyToOne(() => Documento, documentos => documentos.audienciasDetalles2)
  @JoinColumn([{ name: 'id_archivo_videograbacion', referencedColumnName: 'id' }])
  idArchivoVideograbacion: Documento;

  @ManyToOne(() => Audiencia, audiencias => audiencias.audienciasDetalles)
  @JoinColumn([{ name: 'id_audiencia', referencedColumnName: 'id' }])
  idAudiencia: Audiencia;

  @OneToMany(() => AudienciaDetalleExterna, audienciasDetallesExternas => audienciasDetallesExternas.idAudienciaDetalle)
  audienciasDetallesExternas: AudienciaDetalleExterna[];

  @OneToMany(
    () => AudienciaDetalleSuspencion,
    audienciasDetallesSuspenciones => audienciasDetallesSuspenciones.idAudienciaDetalle,
  )
  audienciasDetallesSuspenciones: AudienciaDetalleSuspencion[];
  @ManyToOne(() => TipoEstadoAudiencia, tiposEstadosAudiencias => tiposEstadosAudiencias.audienciasDetalles)
  @JoinColumn([{ name: 'id_estado_audiencia', referencedColumnName: 'id' }])
  idEstadoAudiencia: TipoEstadoAudiencia;

  @ManyToOne(() => SalaAudiencia, salasAudiencias => salasAudiencias.audienciasDetalles)
  @JoinColumn([{ name: 'id_sala_audiencia', referencedColumnName: 'id' }])
  idSalaAudiencia: SalaAudiencia;
}
