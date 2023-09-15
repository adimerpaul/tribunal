import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { RolPermisoEntity } from './rol-permiso.entity';

//@Entity('permisos', { schema: process.env.DB_SCHEMA_AUTORIZACION })
@Entity('permisos', { schema: 'autorizacion' })
@Unique(['tipo', 'path', 'accion', 'estado'])
export class PermisoEntity extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
    type: 'int2',
    comment: 'Clave primaria de la tabla permisos .',
  })
  id: number;

  @Column({
    type: 'varchar',
    name: 'tipo',
    length: '8',
    comment: 'Tipo de permiso FRONTEND O BACKEND',
  })
  tipo: string;

  @Column({
    type: 'text',
    name: 'path',
    comment: 'Url de servicio ',
  })
  path: string;

  @Column({
    type: 'varchar',
    name: 'accion',
    length: '10',
    comment:
      'Accion FRONTEND<CREATE, EDIT, DELETE, ...> O BACKEND<GET, POST, PATCH, PUT, DELETE>',
  })
  accion: string;

  @OneToMany(() => RolPermisoEntity, (rp) => rp.permiso)
  rolesPermiso: RolPermisoEntity[];

  constructor(data?: Partial<PermisoEntity>) {
    super(data);
  }
}
