import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';
import ActoProcesal from 'src/jurisdiccional/actos-procesales/entities/acto-procesal.entity';

@Index('pk_memoriales', ['id'], { unique: true })
@Entity('memoriales', { schema: 'jurisdiccional' })
export default class Memorial extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int2', { name: 'fojas', default: () => '0' })
  fojas: number;

  @Column('int2', { name: 'pruebas', default: () => '0' })
  pruebas: number;

  /*@Column('character varying', {
    name: 'usuario_creacion',
    length: 20,
    default: () => 'SESSION_USER',
  })
  usuarioCreacion: string;

  @Column('timestamp without time zone', {
    name: 'fecha_creacion',
    default: () => 'now()',
  })
  fechaCreacion: Date;

  @Column('character varying', {
    name: 'usuario_modificacion',
    length: 20,
    default: () => 'SESSION_USER',
  })
  usuarioModificacion: string;

  @Column('timestamp without time zone', {
    name: 'fecha_modificacion',
    default: () => 'now()',
  })
  fechaModificacion: Date;

  @Column('smallint', { name: 'estado', default: () => '1' })
  estado: number;*/

  @ManyToOne(() => ActoProcesal, actosProcesales => actosProcesales.memoriales, { lazy: true })
  @JoinColumn([{ name: 'id_acto_procesal', referencedColumnName: 'id' }])
  idActoProcesal: Promise<ActoProcesal>;

  @ManyToOne(() => Persona, personas => personas.memoriales)
  @JoinColumn([{ name: 'id_impetrante', referencedColumnName: 'id' }])
  idImpetrante: Persona;

  @ManyToOne(() => Persona, personas => personas.memoriales2)
  @JoinColumn([{ name: 'id_presentado_por', referencedColumnName: 'id' }])
  idPresentadoPor: Persona;
}
