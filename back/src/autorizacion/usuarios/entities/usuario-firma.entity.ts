import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuariosEntity } from './usuario.entity';

@Entity({ name: 'usuarios-firmas', schema: 'autorizacion' })
export class FirmaUsuarioEntity extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
    type: 'bigint',
  })
  id: number;

  @Column({ type: 'integer', name: 'id_usuario' })
  idUsuario: number;

  @Column({ type: 'varchar', length: 16, nullable: true })
  pin: string;

  @Column({ type: 'date', nullable: true, name: 'fecha_vigencia' })
  fechaVigencia: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  image: string;

  @ManyToOne(() => UsuariosEntity, usr => usr.id)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: UsuariosEntity;

  constructor(data?: Partial<FirmaUsuarioEntity>) {
    super(data);
  }
}
