import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { MedidaProteccion } from 'src/jurisdiccional/medidas-proteccion/entities/medida-proteccion.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_tipos_medidas_proteccion', ['id'], { unique: true })
@Entity('tipos_medidas_proteccion', {
  schema: 'catalogo',
})
export default class TipoMedidaProteccion extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('smallint', { name: 'codigo' })
  codigo: number;

  @Column('character varying', { name: 'descripcion', length: 900 })
  descripcion: string;

  @Column('character varying', { name: 'ley_normativa', length: 100 })
  leyNormativa: string;

  @OneToMany(() => MedidaProteccion, medidasProteccion => medidasProteccion.idTipoMedidaProteccion)
  medidasProteccions: MedidaProteccion[];
}
