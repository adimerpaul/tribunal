import TipoMedidaProteccion from 'src/catalogo/tipos-medidas-proteccion/entities/tipo-medida-proteccion.entity';
import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import { SujetoProcesal } from 'src/jurisdiccional/sujetos-procesales/entities/sujeto-procesal.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pk_medidas_proteccion', ['id'], { unique: true })
@Entity('medidas_proteccion', { schema: 'jurisdiccional' })
export class MedidaProteccion extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int8',
    generatedIdentity: 'ALWAYS',
  })
  id: string;

  @Column('bigint', {
    name: 'id_medida_proteccion_mp',
    nullable: true,
  })
  idMedidaProteccionMp: string | null;

  @Column('date', {
    name: 'fecha_fin',
    nullable: true,
  })
  fechaFin: string | null;

  @ManyToOne(() => SujetoProcesal, sujetoProcesal => sujetoProcesal.medidasProteccions)
  @JoinColumn([{ name: 'id_sujeto_procesal', referencedColumnName: 'id' }])
  idSujetoProcesal: SujetoProcesal;

  @ManyToOne(() => TipoMedidaProteccion, tiposMedidasProteccion => tiposMedidasProteccion.medidasProteccions)
  @JoinColumn([{ name: 'id_tipo_medida_proteccion', referencedColumnName: 'id' }])
  idTipoMedidaProteccion: TipoMedidaProteccion;
}
