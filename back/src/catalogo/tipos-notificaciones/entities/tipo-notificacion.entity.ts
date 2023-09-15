import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Notificacion } from 'src/jurisdiccional/notificaciones/entities/notificacion.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_notificaciones', ['id'], { unique: true })
@Entity('tipos_notificaciones', { schema: 'catalogo' })
export default class TipoNotificacion extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 30 })
  descripcion: string;

  @Column('character varying', { name: 'ley_normativa', length: 100 })
  leyNormativa: string;

  @OneToMany(() => Notificacion, notificaciones => notificaciones.idTipoNotificacion)
  notificaciones: Notificacion[];
}
