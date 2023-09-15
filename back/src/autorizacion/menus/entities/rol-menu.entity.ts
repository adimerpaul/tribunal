import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Menu } from './menu.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { RolEntity } from 'src/autorizacion/roles/entities/rol.entity';
@Entity('roles_menus', { schema: 'autorizacion' })
export class RolMenu extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
    type: 'int4',
    comment: '',
  })
  id: number;

  @Column({ name: 'id_rol', nullable: false })
  idRol: number;

  @Column({ name: 'id_menu', nullable: false })
  idMenu: number;

  @ManyToOne(() => Menu, menu => menu.rolesMenu)
  @JoinColumn({ name: 'id_menu', referencedColumnName: 'id' })
  menu: Menu;

  @ManyToOne(() => RolEntity, rol => rol.rolMenus)
  @JoinColumn({ name: 'id_rol', referencedColumnName: 'id' })
  rol: RolEntity;
}
