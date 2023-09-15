import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Municipio from 'src/geografico/municipios/entities/municipio.entity';
import { SujetoProcesalPrivacionLibertad } from 'src/jurisdiccional/sujetos-procesales-privaciones-libertades/entities/sujeto-procesal-privacion-libertad.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_recintos_penitenciarios', ['id'], { unique: true })
@Entity('recintos_penitenciarios', {
  schema: 'organizacional',
})
export default class RecintoPenitenciario extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'id_municipio' })
  idMunicipio: number;

  @Column('smallint', {
    name: 'codigo',
    nullable: true,
  })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 100 })
  descripcion: string;

  @Column('character varying', { name: 'tipo', length: 100 })
  tipo: string;
  @ManyToOne(() => Municipio, municipios => municipios.recintosPenitenciarios)
  @JoinColumn([{ name: 'id_municipio', referencedColumnName: 'id' }])
  municipio: Municipio;

  @OneToMany(
    () => SujetoProcesalPrivacionLibertad,
    sujetosProcesalesPrivacionesLibertades => sujetosProcesalesPrivacionesLibertades.recintoPenitenciario,
  )
  sujetosProcesalesPrivacionesLibertades: SujetoProcesalPrivacionLibertad[];
}
