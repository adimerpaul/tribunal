import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import ZonaNotificacionFuncionario from 'src/organizacional/zonas-notificaciones-funcionarios/entities/zona-notificacione-funcionario.entity';

@Index('pk_zonas_notificaciones', ['id'], { unique: true })
@Entity('zonas_notificaciones', {
  schema: 'organizacional',
})
export default class ZonaNotificacion extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @Column('character varying', { name: 'descripcion', length: 250 })
  descripcion: string;

  @Column('character varying', { name: 'color', length: 20 })
  color: string;

  @Column('polygon', { name: 'georreferenciacion' })
  georreferenciacion: string;

  @OneToMany(
    () => ZonaNotificacionFuncionario,
    zonasNotificacionesFuncionarios => zonasNotificacionesFuncionarios.idZonaNotificacion,
    { lazy: true },
  )
  zonasNotificacionesFuncionarios: Promise<ZonaNotificacionFuncionario[]>;
}
