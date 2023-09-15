import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import CompetenciaFiscalia from 'src/organizacional/competencias-fiscalia/entities/competencias-fiscalia.entity';
import Causa from 'src/jurisdiccional/causas/entities/causa.entity';
import Municipio from 'src/geografico/municipios/entities/municipio.entity';

@Index('pk_oficinas_fiscalia', ['id'], { unique: true })
@Entity('oficinas_fiscalia', { schema: 'organizacional' })
export default class OficinaFiscalia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'id_municipio' })
  idMunicipio: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 250 })
  descripcion: string;

  @OneToMany(() => CompetenciaFiscalia, competenciasFiscalia => competenciasFiscalia.oficinaFiscalia, { lazy: true })
  competenciasFiscalias: Promise<CompetenciaFiscalia[]>;

  @OneToMany(() => Causa, causas => causas.idOficinaFiscalia)
  causas: Causa[];

  @ManyToOne(() => Municipio, municipios => municipios.oficinasFiscalias)
  @JoinColumn([{ name: 'id_municipio', referencedColumnName: 'id' }])
  municipio: Municipio;
}
