import { UsuariosEntity } from 'src/autorizacion/usuarios/entities/usuario.entity';
import TipoEstadoCivil from 'src/catalogo/tipos-estados-civiles/entities/tipo-estado-civil.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Departamento from 'src/geografico/departamentos/entities/departamento.entity';
import Municipio from 'src/geografico/municipios/entities/municipio.entity';
import Pais from 'src/geografico/paises/entities/pais.entity';
import Abogado from 'src/identidad/abogados/entities/abogado.entity';
import Funcionario from 'src/identidad/funcionarios/entities/funcionario.entity';
import PersonaDetalle from 'src/identidad/personas-detalles/entities/persona-detalle.entity';
import PersonaDomicilio from 'src/identidad/personas-domicilios/entities/persona-domicilio.entity';
import PersonaIdioma from 'src/identidad/personas-idiomas/entities/persona-idioma.entity';
import PersonaJuridica from 'src/identidad/personas-juridicas/entities/persona-juridica.entity';
import CausaFiscal from 'src/jurisdiccional/causas-fiscales/entities/causa-fiscal.entity';
import Memorial from 'src/jurisdiccional/memoriales/entities/memorial.entity';
import { NotificacionPersonal } from 'src/jurisdiccional/notificaciones-personales/entities/notificacion-personal.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_personas', ['id'], { unique: true })
@Entity('personas', { schema: 'identidad' })
export default class Persona extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'id_tipo_identidad' })
  idTipoIdentidad: number;

  @Column('character varying', { name: 'tipo_documento_identidad', length: 30 })
  tipoDocumentoIdentidad: string;

  @Column('character varying', { name: 'documento_identidad', length: 15 })
  documentoIdentidad: string;

  @Column('character varying', {
    name: 'complemento',
    nullable: true,
    length: 3,
  })
  complemento: string | null;

  @Column('smallint', { name: 'id_lugar_expedicion', nullable: true })
  idLugarExpedicion: number | null;

  @Column('character varying', { name: 'nombres', length: 50 })
  nombres: string;

  @Column('character varying', {
    name: 'primer_apellido',
    nullable: true,
    length: 50,
  })
  primerApellido: string | null;

  @Column('character varying', {
    name: 'segundo_apellido',
    nullable: true,
    length: 50,
  })
  segundoApellido: string | null;

  @Column('date', { name: 'fecha_nacimiento', nullable: true })
  fechaNacimiento: string | null;

  @Column('smallint', { name: 'id_nacionalidad', nullable: true })
  idNacionalidad: number | null;

  @Column('smallint', { name: 'id_municipio_nacimiento', nullable: true })
  idMunicipioNacimiento: number | null;

  @Column('character varying', { name: 'sexo', nullable: true, length: 10 })
  sexo: string | null;

  @Column('smallint', { name: 'id_estado_civil', nullable: true })
  idEstadoCivil: number | null;

  @Column('character varying', {
    name: 'profesion_ocupacion',
    nullable: true,
    length: 50,
  })
  profesionOcupacion: string | null;

  @Column('bigint', { name: 'celular', nullable: true })
  celular: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 100 })
  email: string | null;

  @Column('character varying', {
    name: 'fotografia',
    nullable: true,
    length: 250,
  })
  fotografia: string | null;

  @Column('boolean', { name: 'esta_fallecido', default: () => 'false' })
  estaFallecido: boolean;

  @Column('boolean', { name: 'es_ciudadano_digital', default: () => 'false' })
  esCiudadanoDigital: boolean;

  @OneToMany(() => Abogado, abogados => abogados.idPersona, { lazy: true })
  abogados: Promise<Abogado[]>;

  // @OneToMany(() => Funcionario, (funcionarios) => funcionarios.persona, {
  //   lazy: true,
  // })
  // funcionarios: Promise<Funcionario[]>;

  @OneToMany(() => PersonaDetalle, personaDetalles => personaDetalles.idPersona, { lazy: true })
  personaDetalles: Promise<PersonaDetalle[]>;

  @OneToMany(() => PersonaDomicilio, personaDomicilios => personaDomicilios.idPersona, { lazy: true })
  personaDomicilios: Promise<PersonaDomicilio[]>;

  @OneToMany(() => PersonaIdioma, personasIdiomas => personasIdiomas.idPersona, { lazy: true })
  personasIdiomas: Promise<PersonaIdioma[]>;

  @OneToMany(() => PersonaJuridica, personasJuridicas => personasJuridicas.idRepresentante, { lazy: true })
  personasJuridicas: Promise<PersonaJuridica[]>;

  @OneToMany(() => CausaFiscal, causasFiscales => causasFiscales.idPersona)
  causasFiscales: CausaFiscal[];

  @OneToMany(() => Memorial, memoriales => memoriales.idImpetrante)
  memoriales: Memorial[];

  @OneToMany(() => Memorial, memoriales => memoriales.idPresentadoPor)
  memoriales2: Memorial[];

  @OneToMany(() => NotificacionPersonal, notificacionesPersonales => notificacionesPersonales.idTestigo)
  notificacionesPersonales: NotificacionPersonal[];

  @OneToOne(() => UsuariosEntity, usuario => usuario.persona)
  usuario: UsuariosEntity;

  // person
  @OneToMany(() => Funcionario, ur => ur.persona)
  funcionarios: Funcionario[];

  @ManyToOne(() => Departamento, lugarExpedicion => lugarExpedicion.personas, { lazy: true })
  @JoinColumn([{ name: 'id_lugar_expedicion', referencedColumnName: 'id' }])
  lugarExpedicion: Promise<Departamento>;

  @ManyToOne(() => Pais, nacionalidad => nacionalidad.personas, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_nacionalidad', referencedColumnName: 'id' }])
  nacionalidad: Promise<Pais>;

  @ManyToOne(() => Municipio, municipioNacimiento => municipioNacimiento.personas, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_municipio_nacimiento', referencedColumnName: 'id' }])
  municipioNacimiento: Promise<Municipio>;

  @ManyToOne(() => TipoEstadoCivil, estadoCivil => estadoCivil.personas, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_estado_civil', referencedColumnName: 'id' }])
  estadoCivil: Promise<TipoEstadoCivil>;

  constructor(data?: Partial<Persona>) {
    super(data);
  }

  get nombreCompleto() {
    return this.nombres + ' ' + this.primerApellido + ' ' + this.segundoApellido
  }

  toJSON() {
    return {
      ... this,
      nombreCompleto: this.nombreCompleto
    }
  }
}
