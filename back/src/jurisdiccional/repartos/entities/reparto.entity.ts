import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Funcionario from 'src/identidad/funcionarios/entities/funcionario.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';

@Index('pk_repartos', ['id'], { unique: true })
@Entity('repartos', { schema: 'jurisdiccional' })
export default class Reparto extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int2', { name: 'id_oficina' })
  idOficina: number;

  @Column('int4', { name: 'id_juez' })
  idJuez: number;

  @Column('int', { name: 'id_causa_oficina_mp' })
  idCausaOficinaMp: number;

  /*
  @Column('character varying', {
    name: 'usuario_creacion',
    length: 20,
    default: () => 'SESSION_USER',
  })
  usuarioCreacion: string;

  @Column('timestamp without time zone', {
    name: 'fecha_creacion',
    default: () => 'now()',
  })
  fechaCreacion: Date;

  @Column('character varying', {
    name: 'usuario_modificacion',
    length: 20,
    default: () => 'SESSION_USER',
  })
  usuarioModificacion: string;

  @Column('timestamp without time zone', {
    name: 'fecha_modificacion',
    default: () => 'now()',
  })
  fechaModificacion: Date;

  @Column('smallint', { name: 'estado', default: () => '1' })
  estado: number;
  */

  @ManyToOne(() => ActoProcesal, actoProcesal => actoProcesal.reparto, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_acto_procesal', referencedColumnName: 'id' }])
  idActoProcesal: Promise<ActoProcesal>;

  @ManyToOne(() => Funcionario, funcionarios => funcionarios.repartos)
  @JoinColumn([{ name: 'id_juez', referencedColumnName: 'id' }])
  idFuncionario: Funcionario;

  @ManyToOne(() => Oficina, oficinas => oficinas.repartos)
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  idOficina2: Oficina;
}
