import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';
import CausaPrecedente from 'src/jurisdiccional/causas-precedentes/entities/causa-precedente.entity';
import Bien from 'src/jurisdiccional/bienes/entities/bien.entity';
import CausaDelito from 'src/jurisdiccional/causa-delitos/entities/causa-delito.entity';
import CausaFiscal from 'src/jurisdiccional/causas-fiscales/entities/causa-fiscal.entity';
import { SujetoProcesal } from 'src/jurisdiccional/sujetos-procesales/entities/sujeto-procesal.entity';
import OficinaFiscalia from 'src/organizacional/oficinas-fiscalia/entities/oficinas-fiscalia.entity';
import Municipio from 'src/geografico/municipios/entities/municipio.entity';
import TipoDenuncia from 'src/catalogo/tipos-denuncias/entities/tipo-denuncia.entity';
import TipoEstadoCausa from 'src/catalogo/tipos-estados-causas/entities/tipo-estado-causa.entity';
import TipoEtapaCausa from 'src/catalogo/tipos-etapas-causas/entities/tipo-etapa-causa.entity';

@Index('pk_causas', ['id'], { unique: true })
@Entity('causas', { schema: 'jurisdiccional' })
export default class Causa extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int8', { name: 'id_causa_mp', nullable: true })
  idCausaMp: string | null;

  @Column('character varying', {
    name: 'codigo_unico',
    nullable: true,
    length: 15,
  })
  codigoUnico: string | null;

  @Column('timestamp without time zone', {
    name: 'fecha_hora_creacion',
    nullable: true,
  })
  fechaHoraCreacion: Date | null;

  @Column('character varying', {
    name: 'hecho_zona',
    nullable: true,
    length: 250,
  })
  hechoZona: string | null;

  @Column('character varying', {
    name: 'hecho_direccion',
    nullable: true,
    length: 250,
  })
  hechoDireccion: string | null;

  @Column('numeric', {
    name: 'hecho_latitud',
    nullable: true,
    precision: 15,
    scale: 8,
  })
  hechoLatitud: string | null;

  @Column('numeric', {
    name: 'hecho_longitud',
    nullable: true,
    precision: 15,
    scale: 8,
  })
  hechoLongitud: string | null;

  @Column('character varying', {
    name: 'hecho_referencia_lugar',
    nullable: true,
    length: 250,
  })
  hechoReferenciaLugar: string | null;

  @Column('character varying', {
    name: 'hecho_relato',
    nullable: true,
    length: 5000,
  })
  hechoRelato: string | null;

  @Column('timestamp without time zone', {
    name: 'hecho_fecha_hora',
    nullable: true,
  })
  hechoFechaHora: Date | null;

  @Column('timestamp without time zone', {
    name: 'hecho_fecha_hora_fin',
    nullable: true,
  })
  hechoFechaHoraFin: Date | null;

  @Column('character varying', {
    name: 'hecho_fecha_hora_aproximada',
    nullable: true,
    length: 200,
  })
  hechoFechaHoraAproximada: string | null;

  @Column('character varying', {
    name: 'denominacion_causa',
    nullable: true,
    length: 50,
  })
  denominacionCausa: string | null;

  @Column('character varying', { name: 'tags', nullable: true, length: 100 })
  tags: string | null;

  @Column('character varying', { name: 'origen', nullable: true, length: 20 })
  origen: string | null;

  @OneToMany(() => ActoProcesal, actoProcesal => actoProcesal.idCausa, {
    lazy: true,
  })
  actoProcesal: Promise<ActoProcesal[]>;

  @OneToMany(() => Bien, bienes => bienes.idCausa, { lazy: true })
  bienes: Promise<Bien[]>;

  @OneToMany(() => CausaDelito, causaDelito => causaDelito.idCausa, {
    lazy: true,
  })
  causaDelito: Promise<CausaDelito[]>;

  @OneToMany(() => CausaFiscal, causaFiscal => causaFiscal.idCausa, {
    lazy: true,
  })
  causaFiscal: Promise<CausaFiscal[]>;

  @OneToMany(() => CausaPrecedente, causaPrecedente => causaPrecedente.idCausa, { lazy: true })
  causaPrecedente: Promise<CausaPrecedente[]>;

  @OneToMany(() => CausaPrecedente, causaPrecedente => causaPrecedente.idCausaPrecedente, { lazy: true })
  causaPrecedente2: Promise<CausaPrecedente[]>;

  @OneToMany(() => SujetoProcesal, sujetosProcesales => sujetosProcesales.idCausa, { lazy: true })
  sujetosProcesales: Promise<SujetoProcesal[]>;

  @ManyToOne(() => OficinaFiscalia, oficinasFiscalia => oficinasFiscalia.causas)
  @JoinColumn([{ name: 'id_oficina_fiscalia', referencedColumnName: 'id' }])
  idOficinaFiscalia: OficinaFiscalia;

  @ManyToOne(() => Municipio, municipios => municipios.causas)
  @JoinColumn([{ name: 'id_municipio_hecho', referencedColumnName: 'id' }])
  idMunicipioHecho: Municipio;

  @ManyToOne(() => TipoDenuncia, tiposDenuncias => tiposDenuncias.causas)
  @JoinColumn([{ name: 'id_tipo_denuncia', referencedColumnName: 'id' }])
  idTipoDenuncia: TipoDenuncia;

  @ManyToOne(() => TipoEstadoCausa, tiposEstadosCausas => tiposEstadosCausas.causas)
  @JoinColumn([{ name: 'id_tipo_estado', referencedColumnName: 'id' }])
  idTipoEstado: TipoEstadoCausa;

  @ManyToOne(() => TipoEtapaCausa, tiposEtapasCausas => tiposEtapasCausas.causas)
  @JoinColumn([{ name: 'id_tipo_etapa', referencedColumnName: 'id' }])
  idTipoEtapa: TipoEtapaCausa;
}
