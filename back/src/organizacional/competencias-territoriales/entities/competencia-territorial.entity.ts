import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Municipio from 'src/geografico/municipios/entities/municipio.entity';

@Index('pk_competencias_territorial', ['id'], { unique: true })
@Entity('competencias_territoriales', {
  schema: 'organizacional',
})
export default class CompetenciaTerritorial extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int2', { name: 'id_oficina' })
  idOficina: number;

  @Column('int2', { name: 'id_municipio' })
  idMunicipio: number;

  @ManyToOne(() => Oficina, oficinas => oficinas.competenciasTerritoriales, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'id' }])
  oficina: Promise<Oficina>;

  @ManyToOne(() => Municipio, municipio => municipio.competenciasTerritoriales, {
    lazy: true,
  })
  @JoinColumn([{ name: 'id_municipio', referencedColumnName: 'id' }])
  municipio: Promise<Municipio>;
}
