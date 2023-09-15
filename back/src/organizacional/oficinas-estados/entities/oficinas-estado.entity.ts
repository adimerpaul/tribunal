import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';

@Index('pk_oficinas_estados', ['id'], { unique: true })
@Entity('oficinas_estados', { schema: 'organizacional' })
export default class OficinaEstado extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('bigint', { name: 'id_documento' })
  idDocumento: string;

  @Column('smallint', { name: 'tipo' })
  tipo: number;

  @Column('timestamp without time zone', { name: 'fecha_hora_inicio' })
  fechaHoraInicio: Date;

  @Column('timestamp without time zone', { name: 'fecha_hora_fin' })
  fechaHoraFin: Date;

  @Column('character varying', { name: 'descripcion', length: 150 })
  descripcion: string;

  @ManyToOne(() => Oficina, oficinas => oficinas.oficinasEstados, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  idOficina: Promise<Oficina>;
}
