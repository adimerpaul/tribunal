import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolMenu } from './rol-menu.entity';

@Entity({ name: 'menus', schema: 'autorizacion', orderBy: {} })
export class Menu extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', { generatedIdentity: 'ALWAYS', type: 'smallint' })
  id: number;

  @Column({ type: 'varchar', length: 60, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 250, nullable: false })
  descripcion: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  icono: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  url: string;

  @Column({ type: 'int2', nullable: false, name: 'orden_despliegue' })
  ordenDespliegue: number;

  @Column({ type: 'int2', nullable: false, default: 0, name: 'id_padre' })
  idPadre: number;

  @OneToMany(() => RolMenu, rm => rm.menu)
  rolesMenu: RolMenu[];
}
