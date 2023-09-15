import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Ente from 'src/organizacional/entes/entities/ente.entity';
import CompetenciaFiscalia from 'src/organizacional/competencias-fiscalia/entities/competencias-fiscalia.entity';
import CompetenciaOrganizacional from 'src/organizacional/competencias-organizacionales/entities/competencia-organizacional.entity';
import SalaAudienciaOficina from 'src/organizacional/salas-audiencias-oficinas/entities/salas-audiencias-oficina.entity';
import OficinaEstado from 'src/organizacional/oficinas-estados/entities/oficinas-estado.entity';
import ZonaNotificacionFuncionario from 'src/organizacional/zonas-notificaciones-funcionarios/entities/zona-notificacione-funcionario.entity';
import CompetenciaTerritorial from 'src/organizacional/competencias-territoriales/entities/competencia-territorial.entity';
import CompetenciaGestora from 'src/organizacional/competencias-gestoras/entities/competencia-gestora.entity';
import { Audiencia } from 'src/jurisdiccional/audiencias/entities/audiencia.entity';
import Funcionario from 'src/identidad/funcionarios/entities/funcionario.entity';
import { Notificacion } from 'src/jurisdiccional/notificaciones/entities/notificacion.entity';
import Reparto from 'src/jurisdiccional/repartos/entities/reparto.entity';
import Municipio from 'src/geografico/municipios/entities/municipio.entity';

@Index('pk_oficinas', ['id'], { unique: true })
@Entity('oficinas', { schema: 'organizacional' })
export default class Oficina extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;
  @Column('smallint', { name: 'id_municipio' })
  idMunicipio: number;

  @Column('character varying', { name: 'descripcion', length: 250 })
  descripcion: string;

  @Column('character varying', { name: 'edificio', length: 500 })
  edificio: string;

  @Column('character varying', { name: 'direccion', length: 500 })
  direccion: string;

  @Column('int2', { name: 'id_ente' })
  idEnte: number;

  @Column('character varying', { name: 'telefonos', length: 100 })
  telefonos: string;

  @Column('numeric', {
    name: 'latitud',
    precision: 15,
    scale: 8,
    default: () => '0',
  })
  latitud: string;

  @Column('numeric', {
    name: 'longitud',
    precision: 15,
    scale: 8,
    default: () => '0',
  })
  longitud: string;

  @OneToMany(() => CompetenciaFiscalia, competenciasFiscalia => competenciasFiscalia.oficina, { lazy: true })
  competenciasFiscalias: Promise<CompetenciaFiscalia[]>;

  @OneToMany(() => CompetenciaGestora, competenciasGestoras => competenciasGestoras.gestora, { lazy: true })
  competenciasGestoras: Promise<CompetenciaGestora[]>;

  @OneToMany(() => CompetenciaGestora, competenciasGestoras => competenciasGestoras.oficina, { lazy: true })
  competenciasGestoras2: Promise<CompetenciaGestora[]>;

  @OneToMany(() => CompetenciaOrganizacional, competenciasOrganizacionales => competenciasOrganizacionales.oficina, {
    lazy: true,
  })
  competenciasOrganizacionales: Promise<CompetenciaOrganizacional[]>;

  @OneToMany(() => CompetenciaTerritorial, competenciasTerritoriales => competenciasTerritoriales.oficina, {
    lazy: true,
  })
  competenciasTerritoriales: Promise<CompetenciaTerritorial[]>;

  @ManyToOne(() => Ente, entes => entes.oficinas, { lazy: true })
  @JoinColumn([{ name: 'id_ente', referencedColumnName: 'id' }])
  ente: Promise<Ente>;

  @OneToMany(() => OficinaEstado, oficinasEstados => oficinasEstados.idOficina, { lazy: true })
  oficinasEstados: Promise<OficinaEstado[]>;

  @OneToMany(() => SalaAudienciaOficina, salasAudienciasOficinas => salasAudienciasOficinas.idOficina, { lazy: true })
  salasAudienciasOficinas: Promise<SalaAudienciaOficina[]>;

  @OneToMany(
    () => ZonaNotificacionFuncionario,
    zonasNotificacionesFuncionarios => zonasNotificacionesFuncionarios.idOficina,
    { lazy: true },
  )
  zonasNotificacionesFuncionarios: Promise<ZonaNotificacionFuncionario[]>;

  @OneToMany(() => Audiencia, audiencias => audiencias.idOficina)
  audiencias: Audiencia[];

  @OneToMany(() => Funcionario, funcionarios => funcionarios.idOficina)
  funcionarios: Funcionario[];

  @OneToMany(() => Notificacion, notificaciones => notificaciones.idOficina)
  notificaciones: Notificacion[];

  @OneToMany(() => Reparto, repartos => repartos.idOficina2)
  repartos: Reparto[];

  @ManyToOne(() => Municipio, municipios => municipios.oficinas)
  @JoinColumn([{ name: 'id_municipio', referencedColumnName: 'id' }])
  municipio: Municipio;
}
