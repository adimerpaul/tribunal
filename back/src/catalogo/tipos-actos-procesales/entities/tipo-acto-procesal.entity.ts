import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import CategoriaActoProcesal from 'src/catalogo/categorias-actos-procesales/entities/categoria-acto-procesal.entity';
import TipoActoProcesalAreaOrganizacional from 'src/catalogo/tipos-actos-procesales-areas-organizacionales/entities/tipos-actos-procesales-areas-organizacionale.entity';
import TipoActoProcesalEstadoCausa from 'src/catalogo/tipos-actos-procesales-estados-causas/entities/tipos-actos-procesales-estados-causa.entity';
import TipoActoProcesalEtapaCausa from 'src/catalogo/tipos-actos-procesales-etapas-causas/entities/tipos-actos-procesales-etapas-causa.entity';
import TipoActoProcesalRol from 'src/catalogo/tipos-actos-procesales-roles/entities/tipos-acto-procesal-rol.entity';
import TipoActoProcesalTipoAudiencia from 'src/catalogo/tipos-actos-procesales-tipos-audiencias/entities/tipos-actos-procesales-tipos-audiencia.entity';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';

@Index('pk_tipos_actos_procesales', ['id'], { unique: true })
@Entity('tipos_actos_procesales', {
  schema: 'catalogo',
})
export default class TipoActoProcesal extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int2', { name: 'id_categoria', nullable: false })
  idCategoria: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', {
    name: 'descripcion',
    nullable: true,
    length: 150,
  })
  descripcion: string | null;

  @Column('smallint', { name: 'plazo_resolucion', nullable: true })
  plazoResolucion: number | null;

  @Column('smallint', { name: 'plazo_resolucion_unidad', nullable: true })
  plazoResolucionUnidad: number | null;

  @Column('boolean', { name: 'plazo_continuo', default: () => 'false' })
  plazoContinuo: boolean;

  @Column('boolean', { name: 'plazo_comun', default: () => 'false' })
  plazoComun: boolean;

  @Column('smallint', { name: 'plazo_suspencion', default: () => '0' })
  plazoSuspencion: number;

  @Column('smallint', { name: 'visibilidad', default: () => '0' })
  visibilidad: number;

  @Column('boolean', { name: 'unico_causa', default: () => 'false' })
  unicoCausa: boolean;

  @Column('boolean', { name: 'unico_sujeto_procesal', default: () => 'false' })
  unicoSujetoProcesal: boolean;

  @Column('boolean', { name: 'requiere_respuesta', default: () => 'false' })
  requiereRespuesta: boolean;

  @Column('boolean', { name: 'requiere_agendamiento', default: () => 'false' })
  requiereAgendamiento: boolean;

  @Column('boolean', { name: 'requiere_notificacion', default: () => 'false' })
  requiereNotificacion: boolean;

  @Column('boolean', {
    name: 'requiere_notificacion_personal',
    default: () => 'false',
  })
  requiereNotificacionPersonal: boolean;

  @Column('boolean', {
    name: 'requiere_individualizacion_sujetos',
    default: () => 'false',
  })
  requiereIndividualizacionSujetos: boolean;

  @Column('boolean', {
    name: 'requiere_individualizacion_denunciantes',
    default: () => 'false',
  })
  requiereIndividualizacionDenunciantes: boolean;

  @Column('boolean', {
    name: 'requiere_individualizacion_denunciados',
    default: () => 'false',
  })
  requiereIndividualizacionDenunciados: boolean;

  @Column('boolean', { name: 'requiere_adjuntos', default: () => 'false' })
  requiereAdjuntos: boolean;

  @Column('boolean', { name: 'con_adjuntos', default: () => 'false' })
  conAdjuntos: boolean;

  @Column('boolean', { name: 'con_plantilla', default: () => 'false' })
  conPlantilla: boolean;

  @Column('smallint', { name: 'cantidad_validaciones', default: () => '0' })
  cantidadValidaciones: number;

  @Column('boolean', { name: 'interoperable', default: () => 'false' })
  interoperable: boolean;

  @Column('boolean', { name: 'cambia_estado', default: () => 'false' })
  cambiaEstado: boolean;

  @Column('boolean', { name: 'cambia_etapa', default: () => 'false' })
  cambiaEtapa: boolean;

  @Column('character varying', { name: 'ambito', length: 10 })
  ambito: string;

  @ManyToOne(() => CategoriaActoProcesal, categoriasActosProcesales => categoriasActosProcesales.tiposActosProcesales, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_categoria', referencedColumnName: 'id' }])
  categoria: Promise<CategoriaActoProcesal>;

  @OneToMany(
    () => TipoActoProcesalAreaOrganizacional,
    tiposActosProcesalesAreasOrganizacionales => tiposActosProcesalesAreasOrganizacionales.tipoActoProcesal,
    { lazy: true },
  )
  tiposActosProcesalesAreasOrganizacionales: Promise<TipoActoProcesalAreaOrganizacional[]>;

  @OneToMany(
    () => TipoActoProcesalEstadoCausa,
    tiposActosProcesalesEstadosCausas => tiposActosProcesalesEstadosCausas.tipoActoProcesal,
    { lazy: true },
  )
  tiposActosProcesalesEstadosCausas: Promise<TipoActoProcesalEstadoCausa[]>;

  @OneToMany(
    () => TipoActoProcesalEtapaCausa,
    tiposActosProcesalesEtapasCausas => tiposActosProcesalesEtapasCausas.idTipoActoProcesal,
    { lazy: true },
  )
  tiposActosProcesalesEtapasCausas: Promise<TipoActoProcesalEtapaCausa[]>;

  @OneToMany(() => TipoActoProcesalRol, tiposActosProcesalesRoles => tiposActosProcesalesRoles.idTipoActoProcesal, {
    lazy: true,
  })
  tiposActosProcesalesRoles: Promise<TipoActoProcesalRol[]>;

  @OneToMany(
    () => TipoActoProcesalTipoAudiencia,
    tiposActosProcesalesTiposAudiencias => tiposActosProcesalesTiposAudiencias.idTipoActoProcesal,
    { lazy: true },
  )
  tiposActosProcesalesTiposAudiencias: Promise<TipoActoProcesalTipoAudiencia[]>;

  @OneToMany(() => ActoProcesal, actosProcesales => actosProcesales.tipoActoProcesal)
  actosProcesales: ActoProcesal[];
}
