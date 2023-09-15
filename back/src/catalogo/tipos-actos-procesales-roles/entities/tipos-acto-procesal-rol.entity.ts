import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';
import { RolEntity } from 'src/autorizacion/roles/entities/rol.entity';

@Index('pk_tipos_actos_procesales_roles', ['id'], { unique: true })
@Entity('tipos_actos_procesales_roles', {
  schema: 'catalogo',
})
export default class TipoActoProcesalRol extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int4', { name: 'id_rol' })
  idRol: number;

  @Column('int2', { name: 'id_tipo_acto_procesal' })
  idTipoActoProcesal: number;

  @Column('character varying', {
    name: 'usuario_creacion',
    length: 20,
    default: () => 'SESSION_USER',
  })
  usuarioCreacion: string;

  @ManyToOne(() => TipoActoProcesal, tiposActosProcesales => tiposActosProcesales.tiposActosProcesalesRoles, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_tipo_acto_procesal', referencedColumnName: 'id' }])
  tipoActoProcesal: Promise<TipoActoProcesal>;

  @ManyToOne(() => RolEntity, rol => rol.tiposActosProcesalesRoles, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_rol', referencedColumnName: 'id' }])
  rol: Promise<RolEntity>;
}
