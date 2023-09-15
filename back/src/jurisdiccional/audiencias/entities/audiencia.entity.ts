import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AudienciaDetalle } from 'src/jurisdiccional/audiencias-detalles/entities/audiencia-detalle.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';
import Funcionario from 'src/identidad/funcionarios/entities/funcionario.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import { TipoAudiencia } from 'src/catalogo/tipos-audiencias/entities/tipos-audiencia.entity';

@Index('pk_audiencias', ['id'], { unique: true })
@Entity('audiencias', { schema: 'jurisdiccional' })
export class Audiencia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('bigint', {
    name: 'id_audiencia_mp',
    nullable: true,
  })
  idAudienciaMp: string | null;

  @ManyToOne(() => ActoProcesal, actosProcesales => actosProcesales.audiencias)
  @JoinColumn([{ name: 'id_acto_procesal', referencedColumnName: 'id' }])
  idActoProcesal: ActoProcesal;

  @OneToMany(() => AudienciaDetalle, audienciasDetalles => audienciasDetalles.idAudiencia)
  audienciasDetalles: AudienciaDetalle[];

  @ManyToOne(() => Funcionario, funcionarios => funcionarios.audiencias)
  @JoinColumn([{ name: 'id_juez', referencedColumnName: 'id' }])
  idJuez: Funcionario;

  @ManyToOne(() => Oficina, oficinas => oficinas.audiencias)
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  idOficina: Oficina;

  @ManyToOne(() => TipoAudiencia, tiposAudiencias => tiposAudiencias.audiencias)
  @JoinColumn([{ name: 'id_tipo_audiencia', referencedColumnName: 'id' }])
  idTipoAudiencia: TipoAudiencia;

  constructor(data?: Partial<TipoAudiencia>) {
    super(data);
  }
}
