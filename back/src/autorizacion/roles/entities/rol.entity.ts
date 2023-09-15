import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { UsuarioRolEntity } from './usuario-rol.entity';
import { RolMenu } from 'src/autorizacion/menus/entities/rol-menu.entity';
import TipoActoProcesalRol from 'src/catalogo/tipos-actos-procesales-roles/entities/tipos-acto-procesal-rol.entity';
import { RolPermisoEntity } from 'src/autorizacion/permisos/entities/rol-permiso.entity';

@Unique(['nombre', 'codigo'])
//@Entity({ name: 'roles', schema: process.env.DB_SCHEMA_AUTORIZACION })
@Entity({ name: 'roles', schema: 'autorizacion' })
export class RolEntity extends AuditoriaEntity {
  @PrimaryGeneratedColumn() id?: number;

  @Column({ type: 'varchar', nullable: false, length: 30 })
  nombre: string;

  @Column({ type: 'varchar', nullable: false, length: 200 })
  descripcion: string;

  @Column({ type: 'varchar', nullable: false, length: 30 })
  codigo: string;

  @Column({ type: 'integer', nullable: true })
  nivel: number;

  @OneToMany(() => UsuarioRolEntity, ur => ur.rol)
  usuariosRol: UsuarioRolEntity[];

  @OneToMany(() => RolMenu, rm => rm.rol)
  rolMenus: RolMenu[];

  @OneToMany(() => RolPermisoEntity, rp => rp.permiso)
  rolPermisos: RolPermisoEntity[];

  @OneToMany(() => TipoActoProcesalRol, tiposActosProcesalesRoles => tiposActosProcesalesRoles.rol, { lazy: true })
  tiposActosProcesalesRoles: Promise<TipoActoProcesalRol[]>;

  constructor(data?: Partial<RolEntity>) {
    super(data);
  }
}
