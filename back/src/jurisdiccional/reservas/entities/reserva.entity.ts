import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_reservas', ['id'], { unique: true })
@Entity('reservas', { schema: 'jurisdiccional' })
export default class Reserva extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int2', { name: 'ambito' })
  ambito: number;

  @Column('date', { name: 'fecha_fin' })
  fechaFin: string;

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

  @ManyToOne(() => ActoProcesal, actoProcesal => actoProcesal.reserva, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_acto_procesal', referencedColumnName: 'id' }])
  idActoProcesal: Promise<ActoProcesal>;

  /*constructor(init?: Partial<Reservas>) {
    super();
    Object.assign(this, init);
  }*/
}
