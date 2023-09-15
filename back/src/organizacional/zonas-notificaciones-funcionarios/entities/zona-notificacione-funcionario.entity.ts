import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ZonaNotificacion from 'src/organizacional/zonas-notificaciones/entities/zona-notificacion.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { NotificacionPersonal } from 'src/jurisdiccional/notificaciones-personales/entities/notificacion-personal.entity';
import Funcionario from 'src/identidad/funcionarios/entities/funcionario.entity';

@Index('pk_zonas_notificaciones_funcionarios', ['id'], { unique: true })
@Entity('zonas_notificaciones_funcionarios', {
  schema: 'organizacional',
})
export default class ZonaNotificacionFuncionario extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('integer', { name: 'id_funcionario' })
  idFuncionario: number;

  @Column('date', { name: 'fecha' })
  fecha: string;

  @ManyToOne(() => Oficina, oficinas => oficinas.zonasNotificacionesFuncionarios, { lazy: true })
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  idOficina: Promise<Oficina>;

  @ManyToOne(() => ZonaNotificacion, zonasNotificaciones => zonasNotificaciones.zonasNotificacionesFuncionarios, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_zona_notificacion', referencedColumnName: 'id' }])
  idZonaNotificacion: Promise<ZonaNotificacion>;

  @OneToMany(() => NotificacionPersonal, notificacionesPersonales => notificacionesPersonales.idZonificacion)
  notificacionesPersonales: NotificacionPersonal[];

  @ManyToOne(() => Funcionario, funcionarios => funcionarios.zonasNotificacionesFuncionarios)
  @JoinColumn([{ name: 'id_notificador', referencedColumnName: 'id' }])
  notificador: Funcionario;
}
