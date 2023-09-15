import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';
import { MedidaProteccion } from 'src/jurisdiccional/medidas-proteccion/entities/medida-proteccion.entity';
import { Notificacion } from 'src/jurisdiccional/notificaciones/entities/notificacion.entity';
import { SujetoProcesalAbogado } from 'src/jurisdiccional/sujetos-procesales-abogados/entities/sujeto-procesal-abogado.entity';
import { SujetoProcesalActoProcesal } from 'src/jurisdiccional/sujetos-procesales-actos-procesales/entities/sujeto-procesal-acto-procesal.entity';
import { SujetoProcesalDelito } from 'src/jurisdiccional/sujetos-procesales-delitos/entities/sujeto-procesal-delito.entity';
import { SujetoProcesalPrivacionLibertad } from 'src/jurisdiccional/sujetos-procesales-privaciones-libertades/entities/sujeto-procesal-privacion-libertad.entity';
import { SujetoProcesalSituacionJuridica } from 'src/jurisdiccional/sujetos-procesales-situaciones-juridicas/entities/sujeto-procesal-situacion-juridica.entity';

@Index('pk_sujetos_procesales', ['id'], { unique: true })
@Entity({
  schema: 'jurisdiccional',
  name: 'sujetos_procesales',
})
export class SujetoProcesal extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('bigint', {
    name: 'id_sujeto_procesal_mp',
    nullable: true,
  })
  idSujetoProcesalMp: string | null;

  @Column('smallint', { name: 'id_tipo_sujeto_procesal' })
  idTipoSujetoProcesal: number;

  @Column('bigint', { name: 'id_persona_natural', nullable: true })
  idPersonaNatural: string | null;

  @Column('bigint', { name: 'id_persona_juridica', nullable: true })
  idPersonaJuridica: string | null;

  @Column('bigint', {
    name: 'id_persona_juridica_representante',
    nullable: true,
  })
  idPersonaJuridicaRepresentante: string | null;

  @Column('smallint', { name: 'id_parentesco_victima' })
  idParentescoVictima: number;

  @Column('boolean', {
    name: 'reserva_identidad',
    default: () => 'false',
  })
  reservaIdentidad: boolean;

  @Column('boolean', {
    name: 'es_querellante',
    default: () => 'false',
  })
  esQuerellante: boolean;

  @OneToMany(() => MedidaProteccion, medidaProteccion => medidaProteccion.idSujetoProcesal)
  medidasProteccions: MedidaProteccion[];

  @OneToMany(() => Notificacion, notificacion => notificacion.idSujetoProcesal)
  notificacion: Notificacion[];

  @ManyToOne(() => Causa, causas => causas.sujetosProcesales)
  @JoinColumn([{ name: 'id_causa', referencedColumnName: 'id' }])
  idCausa: Causa;

  @OneToMany(() => SujetoProcesalAbogado, sujetosProcesalesAbogados => sujetosProcesalesAbogados.idSujetoProcesal)
  sujetosProcesalesAbogados: SujetoProcesalAbogado[];

  @OneToMany(
    () => SujetoProcesalActoProcesal,
    sujetosProcesalesActosProcesales => sujetosProcesalesActosProcesales.idSujetoProcesal,
  )
  sujetosProcesalesActosProcesales: SujetoProcesalActoProcesal[];

  @OneToMany(() => SujetoProcesalDelito, sujetosProcesalesDelitos => sujetosProcesalesDelitos.idSujetoProcesal)
  sujetosProcesalesDelitos: SujetoProcesalDelito[];

  @OneToMany(
    () => SujetoProcesalPrivacionLibertad,
    sujetosProcesalesPrivacionesLibertades => sujetosProcesalesPrivacionesLibertades.idSujetoProcesal,
  )
  sujetosProcesalesPrivacionesLibertades: SujetoProcesalPrivacionLibertad[];

  @OneToMany(
    () => SujetoProcesalSituacionJuridica,
    sujetosProcesalesSituacionesJuridicas => sujetosProcesalesSituacionesJuridicas.idSujetoProcesal,
  )
  sujetosProcesalesSituacionesJuridicas: SujetoProcesalSituacionJuridica[];
}
