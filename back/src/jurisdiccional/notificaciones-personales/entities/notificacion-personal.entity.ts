import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Notificacion } from 'src/jurisdiccional/notificaciones/entities/notificacion.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';
import ZonaNotificacionFuncionario from 'src/organizacional/zonas-notificaciones-funcionarios/entities/zona-notificacione-funcionario.entity';

@Index('pk_notificaciones_personales', ['id'], { unique: true })
@Entity('notificaciones_personales', { schema: 'jurisdiccional' })
export class NotificacionPersonal {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  // @Column('bigint', {
  //   name: 'id_zonificacion',
  //   nullable: true,
  // })
  // idZonificacion: string | null;

  // @Column('bigint', {
  //   name: 'id_testigo',
  //   nullable: true,
  // })
  // idTestigo: string | null;

  @Column('boolean', {
    name: 'representado',
    default: () => 'false',
  })
  representado: boolean;

  @Column('timestamp without time zone', {
    name: 'fecha_zonificacion',
    nullable: true,
  })
  fechaZonificacion: Date | null;

  @Column('character varying', {
    name: 'direccion',
    length: 500,
    default: () => "''",
  })
  direccion: string;

  @ManyToOne(() => Notificacion, notificaciones => notificaciones.notificacionesPersonales)
  @JoinColumn([{ name: 'id_notificacion', referencedColumnName: 'id' }])
  idNotificacion: Notificacion;

  @ManyToOne(() => Persona, personas => personas.notificacionesPersonales)
  @JoinColumn([{ name: 'id_testigo', referencedColumnName: 'id' }])
  idTestigo: Persona;

  @ManyToOne(
    () => ZonaNotificacionFuncionario,
    zonasNotificacionesFuncionarios => zonasNotificacionesFuncionarios.notificacionesPersonales,
  )
  @JoinColumn([{ name: 'id_zonificacion', referencedColumnName: 'id' }])
  idZonificacion: ZonaNotificacionFuncionario;
}
