import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Audiencia } from 'src/jurisdiccional/audiencias/entities/audiencia.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import Reparto from 'src/jurisdiccional/repartos/entities/reparto.entity';
import TipoCargoFuncionario from 'src/catalogo/tipos-cargos-funcionarios/entities/tipo-cargo-funcionario.entity';
import ZonaNotificacionFuncionario from 'src/organizacional/zonas-notificaciones-funcionarios/entities/zona-notificacione-funcionario.entity';

@Index('pk_funcionarios', ['id'], { unique: true })
@Entity('funcionarios', { schema: 'identidad' })
export default class Funcionario extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int4',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'id_cargo' })
  idCargo: number;

  @Column('character varying', { name: 'tipo_contrato', length: 20 })
  tipoContrato: string;

  @Column('character varying', { name: 'correo_electronico', length: 80 })
  correoElectronico: string;

  // @ManyToOne(() => Persona, (personas) => personas.funcionarios, {
  //   lazy: true,
  // })
  // @JoinColumn([{ name: 'id_persona', referencedColumnName: 'id' }])
  // persona: Promise<Persona>;

  @OneToMany(() => Audiencia, audiencias => audiencias.idJuez)
  audiencias: Audiencia[];

  @ManyToOne(() => Oficina, oficinas => oficinas.funcionarios)
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  idOficina: Oficina;

  @OneToMany(() => Reparto, repartos => repartos.idFuncionario)
  repartos: Reparto[];

  @ManyToOne(() => Persona, usr => usr.funcionarios)
  @JoinColumn({ name: 'id_persona', referencedColumnName: 'id' })
  persona: Persona;

  @ManyToOne(() => TipoCargoFuncionario, usr => usr.funcionarios)
  @JoinColumn({ name: 'id_cargo', referencedColumnName: 'id' })
  cargo: TipoCargoFuncionario;

  @OneToMany(
    () => ZonaNotificacionFuncionario,
    zonasNotificacionesFuncionarios => zonasNotificacionesFuncionarios.notificador,
  )
  zonasNotificacionesFuncionarios: ZonaNotificacionFuncionario[];
}
