import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RolEntity } from './rol.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { UsuariosEntity } from 'src/autorizacion/usuarios/entities/usuario.entity';
/* @Entity('usuarios_roles', {
  schema: process.env.DB_SCHEMA_AUTORIZACION,
}) */
@Entity('usuarios_roles', {
  schema: 'autorizacion',
})
export class UsuarioRolEntity extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
    type: 'int4',
    comment: '',
  })
  id: number;

  @Column({ name: 'id_rol', nullable: false })
  idRol: number;

  @Column({ name: 'id_usuario', nullable: false })
  idUsuario: number;

  @ManyToOne(() => RolEntity, rol => rol.usuariosRol)
  @JoinColumn({ name: 'id_rol', referencedColumnName: 'id' })
  rol: RolEntity;

  // usuarioRol-usuario
  @ManyToOne(() => UsuariosEntity, usr => usr.rolesUsuario)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: UsuariosEntity;

  constructor(data?: Partial<UsuarioRolEntity>) {
    super(data);
  }
}
