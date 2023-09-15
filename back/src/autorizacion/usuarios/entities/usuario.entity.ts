import { hash } from 'bcryptjs';
import { UsuarioRolEntity } from 'src/autorizacion/roles/entities/usuario-rol.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
/* @Entity('usuarios', {
  schema: process.env.DB_SCHEMA_AUTORIZACION,
}) */

@Unique(['usuario'])
@Entity('usuarios', { schema: 'autorizacion' })
export class UsuariosEntity extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
    type: 'int4',
  })
  id: number;

  @Column({ name: 'id_persona', type: 'int8', select: true })
  idPersona: number;

  @Column({ type: 'varchar', length: 30, nullable: false, select: true })
  usuario: string;

  @Column({ type: 'varchar', select: true })
  clave: string;

  @Column({ type: 'varchar', name: 'token', select: true, nullable: true })
  token: string;

  @Column({ name: 'refresh_token', select: true, nullable: true })
  refreshToken: string;

  constructor(data?: Partial<UsuariosEntity>) {
    super(data);
  }

  // usuario-usuarioRol
  @OneToMany(() => UsuarioRolEntity, ur => ur.usuario)
  rolesUsuario: UsuarioRolEntity[];

  @OneToOne(() => Persona, persona => persona.usuario)
  @JoinColumn([{ name: 'id_persona', referencedColumnName: 'id' }])
  persona: Persona;

  @BeforeInsert()
  async hashPassword() {
    this.clave = await hash(this.clave, parseInt(process.env.ROUNDS_SECURITY));
  }
}
