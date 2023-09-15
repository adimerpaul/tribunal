import { GlobalService } from 'src/autorizacion/auth/global.service';
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
export abstract class AuditoriaEntity extends BaseEntity {
  @Column('varchar', {
    name: 'usuario_creacion',
    length: 20,
    default: () => 'SESSION_USER',
    select: false,
  })
  usuarioCreacion: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'fecha_creacion',
    default: () => 'now()',
    select: false,
  })
  fechaCreacion: Date;

  @Column('varchar', {
    name: 'usuario_modificacion',
    length: 20,
    default: () => 'SESSION_USER',
    select: false,
  })
  usuarioModificacion: string;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'fecha_modificacion',
    default: () => 'now()',
    onUpdate: 'now()',
    select: false,
  })
  fechaModificacion: Date;

  @Column('smallint', { default: 1, select: false })
  estado: number;

  constructor(data?: Partial<AuditoriaEntity>) {
    super();
    if (data) Object.assign(this, data);
  }

  @BeforeInsert()
  setUsuarioCreacion() {
    if (GlobalService.userNameSession) {
      this.usuarioCreacion = GlobalService.userNameSession;
      this.usuarioModificacion = GlobalService.userNameSession;
    }
  }

  @BeforeUpdate()
  setUsuarioModificacion() {
    if (GlobalService.userNameSession) {
      this.usuarioModificacion = GlobalService.userNameSession;
    }
  }
}
