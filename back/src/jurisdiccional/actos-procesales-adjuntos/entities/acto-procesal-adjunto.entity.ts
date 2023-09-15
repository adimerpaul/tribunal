import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';

@Index('pk_actos_procesales_documentos', ['id'], { unique: true })
@Entity('actos_procesales_adjuntos', {
  schema: 'jurisdiccional',
})
export default class ActoProcesalAdjunto extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int2', { name: 'fojas' })
  fojas: number;

  @ManyToOne(() => ActoProcesal, actoProcesal => actoProcesal.actoProcesalAdjunto, { lazy: true })
  @JoinColumn([{ name: 'id_acto_procesal', referencedColumnName: 'id' }])
  idActoProcesal: Promise<ActoProcesal>;

  @ManyToOne(() => ActoProcesal, actoProcesal => actoProcesal.actoProcesalAdjunto2, { lazy: true })
  @JoinColumn([{ name: 'id_acto_procesal_adjunto', referencedColumnName: 'id' }])
  idActoProcesalAdjunto: Promise<ActoProcesal>;
}
