import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import SalaAudienciaOficina from 'src/organizacional/salas-audiencias-oficinas/entities/salas-audiencias-oficina.entity';
import { AudienciaDetalle } from 'src/jurisdiccional/audiencias-detalles/entities/audiencia-detalle.entity';

@Index('pk_salas_audiencias', ['id'], { unique: true })
@Entity('salas_audiencias', { schema: 'organizacional' })
export default class SalaAudiencia extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('character varying', { name: 'descripcion', length: 250 })
  descripcion: string;

  @Column('character varying', { name: 'ubicacion', length: 250 })
  ubicacion: string;

  @Column('character varying', { name: 'capacidad', length: 50 })
  capacidad: string;

  @Column('character varying', { name: 'dimension', length: 50 })
  dimension: string;

  @Column('boolean', { name: 'es_camara_gesell', default: () => 'false' })
  esCamaraGesell: boolean;

  @OneToMany(() => SalaAudienciaOficina, salasAudienciasOficinas => salasAudienciasOficinas.idSalaAudiencia, {
    lazy: true,
  })
  salasAudienciasOficinas: Promise<SalaAudienciaOficina[]>;

  @OneToMany(() => AudienciaDetalle, audienciasDetalles => audienciasDetalles.idSalaAudiencia)
  audienciasDetalles: AudienciaDetalle[];
}
