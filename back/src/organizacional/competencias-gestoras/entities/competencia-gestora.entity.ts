import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';

@Index('pk_competencias_gestoras', ['id'], { unique: true })
@Entity('competencias_gestoras', {
  schema: 'organizacional',
})
export default class CompetenciaGestora extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'semilla', default: () => '5' })
  semilla: number;

  @Column('integer', { name: 'carga' })
  carga: number;

  @Column('int2', { name: 'id_gestora' })
  idGestora: number;

  @Column('int2', { name: 'id_oficina' })
  idOficina: number;

  @Column('smallint', { name: 'periodicidad', default: () => '1' })
  periodicidad: number;

  @Column('character varying', {
    name: 'enlace_audiencia_virtual',
    length: 200,
  })
  enlaceAudienciaVirtual: string;

  @ManyToOne(() => Oficina, oficinas => oficinas.competenciasGestoras, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_gestora', referencedColumnName: 'id' }])
  gestora: Promise<Oficina>;

  @ManyToOne(() => Oficina, oficinas => oficinas.competenciasGestoras2, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  oficina: Promise<Oficina>;
}
