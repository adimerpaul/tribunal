import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import Provincia from 'src/geografico/provincias/entities/provincia.entity';
import CompetenciaTerritorial from 'src/organizacional/competencias-territoriales/entities/competencia-territorial.entity';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';
import Persona from 'src/identidad/personas/entities/persona.entity';
import Oficina from 'src/organizacional/oficinas/entities/oficina.entity';
import OficinaFiscalia from 'src/organizacional/oficinas-fiscalia/entities/oficinas-fiscalia.entity';
import RecintoPenitenciario from 'src/organizacional/recintos-penitenciarios/entities/recinto-penitenciario.entity';

@Index('pk_municipios', ['id'], { unique: true })
@Entity('municipios', {
  schema: 'geografico',
})
export default class Municipio extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo', nullable: true })
  codigo: number;

  @Column('character varying', { name: 'codice', length: 8 })
  codice: string | number;

  @Column('character varying', { name: 'descripcion' })
  descripcion: string;

  @Column({ name: 'id_provincia', nullable: false })
  idProvincia: number;


  @ManyToOne(() => Provincia, (provincias) => provincias.municipios)
  @JoinColumn({ name: 'id_provincia', referencedColumnName: 'id' })
  provincia: Provincia;

  @OneToMany(() => CompetenciaTerritorial, competenciasTerritoriales => competenciasTerritoriales.municipio, {
    lazy: true,
  })
  competenciasTerritoriales: Promise<CompetenciaTerritorial[]>;
  @OneToMany(() => Causa, causas => causas.idMunicipioHecho)
  causas: Causa[];

  @OneToMany(() => Persona, personas => personas.municipioNacimiento, {
    lazy: true,
  })
  personas: Promise<Persona[]>;

  @OneToMany(() => Oficina, oficinas => oficinas.municipio)
  oficinas: Promise<Oficina[]>;

  @OneToMany(() => OficinaFiscalia, oficinasFiscalias => oficinasFiscalias.municipio)
  oficinasFiscalias: Promise<OficinaFiscalia[]>;

  @OneToMany(() => RecintoPenitenciario, recintosPenitenciarios => recintosPenitenciarios.municipio)
  recintosPenitenciarios: RecintoPenitenciario[];
}
