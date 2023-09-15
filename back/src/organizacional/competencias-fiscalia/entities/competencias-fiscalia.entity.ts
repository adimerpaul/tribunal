import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import OficinaFiscalia from 'src/organizacional/oficinas-fiscalia/entities/oficinas-fiscalia.entity';

@Index('pk_competencias_fiscalia', ['id'], { unique: true })
@Entity('competencias_fiscalia', {
  schema: 'organizacional',
})
export default class CompetenciaFiscalia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'estado', default: () => '1' })
  estado: number;

  @Column('int2', { name: 'id_oficina_fiscalia' })
  idOficinaFiscalia: number;

  @Column('int2', { name: 'id_oficina' })
  idOficina: number;

  @ManyToOne(() => Oficina, oficinas => oficinas.competenciasFiscalias, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  oficina: Promise<Oficina>;

  @ManyToOne(() => OficinaFiscalia, oficinasFiscalia => oficinasFiscalia.competenciasFiscalias, { lazy: true })
  @JoinColumn([{ name: 'id_oficina_fiscalia', referencedColumnName: 'id' }])
  oficinaFiscalia: Promise<OficinaFiscalia>;
}
