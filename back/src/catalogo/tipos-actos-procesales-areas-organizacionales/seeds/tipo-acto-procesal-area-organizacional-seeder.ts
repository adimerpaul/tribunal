import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import TipoActoProcesalAreaOrganizacional from '../entities/tipos-actos-procesales-areas-organizacionale.entity';
import AreaOrganizacional from 'src/organizacional/areas-organizacionales/entities/area-organizacional.entity';
import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';

export class TipoActoProcesalAreaOrganizacionalSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(TipoActoProcesalAreaOrganizacional);
    const areaOrganizacionalRepo = dataSource.getRepository(AreaOrganizacional);
    const tipoActoProcesal = dataSource.getRepository(TipoActoProcesal);

    const data = [
      { idAreaOrganizacional: 1, idTipoActoProcesal: 1 },
      { idAreaOrganizacional: 1, idTipoActoProcesal: 2 },
      { idAreaOrganizacional: 2, idTipoActoProcesal: 3 },
      { idAreaOrganizacional: 2, idTipoActoProcesal: 4 },
      { idAreaOrganizacional: 3, idTipoActoProcesal: 5 },
      { idAreaOrganizacional: 3, idTipoActoProcesal: 6 },
      { idAreaOrganizacional: 4, idTipoActoProcesal: 7 },
      { idAreaOrganizacional: 1, idTipoActoProcesal: 8 },
      { idAreaOrganizacional: 1, idTipoActoProcesal: 9 },
    ];

    for (const element of data) {
      const existeAreaOrganizacional = await areaOrganizacionalRepo.findOne({
        where: { id: element.idAreaOrganizacional },
      });
      const existeTipoActoProcesal = await tipoActoProcesal.findOne({
        where: { id: element.idTipoActoProcesal },
      });
      if (existeAreaOrganizacional && existeTipoActoProcesal) {
        const temporal = repository.create(element);
        await repository.save(temporal);
      }
    }
  }
}
