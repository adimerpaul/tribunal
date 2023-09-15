import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PermisoEntity } from './permiso.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { RolEntity } from 'src/autorizacion/roles/entities/rol.entity';

@Entity('roles_permisos', { schema: 'autorizacion' })
export class RolPermisoEntity extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
    type: 'int4',
    comment: '',
  })
  id: number;

  @Column({ name: 'id_rol', nullable: false })
  idRol: number;

  @Column({ name: 'id_permiso', nullable: false })
  idPermiso: number;

  @ManyToOne(() => PermisoEntity, (menu) => menu.rolesPermiso)
  @JoinColumn({ name: 'id_permiso', referencedColumnName: 'id' })
  permiso: PermisoEntity;

  @ManyToOne(() => RolEntity, (rol) => rol.rolPermisos)
  @JoinColumn({ name: 'id_rol', referencedColumnName: 'id' })
  rol: RolEntity;

  constructor(data?: Partial<RolPermisoEntity>) {
    super(data);
  }
}
