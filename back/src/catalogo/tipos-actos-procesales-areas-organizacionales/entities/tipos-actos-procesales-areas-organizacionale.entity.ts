import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuditoriaEntity } from 'src/common/entities/auditoria.entity';
import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';
import AreaOrganizacional from 'src/organizacional/areas-organizacionales/entities/area-organizacional.entity';

@Index('pk_tipos_actos_procesales_areas_organizacionales', ['id'], {
  unique: true,
})
@Entity('tipos_actos_procesales_areas_organizacionales', {
  schema: 'catalogo',
})
export default class TipoActoProcesalAreaOrganizacional extends AuditoriaEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int2',
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('int2', { name: 'id_area_organizacional' })
  idAreaOrganizacional: number;

  @Column('int2', { name: 'id_tipo_acto_procesal' })
  idTipoActoProcesal: number;

  @ManyToOne(
    () => TipoActoProcesal,
    tiposActosProcesales => tiposActosProcesales.tiposActosProcesalesAreasOrganizacionales,
    { lazy: true },
  )
  @JoinColumn([{ name: 'id_tipo_acto_procesal', referencedColumnName: 'id' }])
  tipoActoProcesal: Promise<TipoActoProcesal>;

  @ManyToOne(
    () => AreaOrganizacional,
    areasOrganizacionales => areasOrganizacionales.tiposActosProcesalesAreasOrganizacionales,
  )
  @JoinColumn([{ name: 'id_area_organizacional', referencedColumnName: 'id' }])
  areaOrganizacional: AreaOrganizacional;
}
