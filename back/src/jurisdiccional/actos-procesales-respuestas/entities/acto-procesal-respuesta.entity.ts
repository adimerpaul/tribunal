import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';

@Index('pk_actos_procesales_respuestas', ['id'], { unique: true })
@Entity('actos_procesales_respuestas', {
  schema: 'jurisdiccional',
})
export default class ActoProcesalRespuesta extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @ManyToOne(() => ActoProcesal, actoProcesal => actoProcesal.actoProcesalRespuesta, { lazy: true })
  @JoinColumn([{ name: 'id_acto_procesal', referencedColumnName: 'id' }])
  idActoProcesal: Promise<ActoProcesal>;

  @ManyToOne(() => ActoProcesal, actoProcesal => actoProcesal.actoProcesalRespuesta2, { lazy: true })
  @JoinColumn([{ name: 'id_acto_procesal_respuesta', referencedColumnName: 'id' }])
  idActoProcesalRespuesta: Promise<ActoProcesal>;
}
