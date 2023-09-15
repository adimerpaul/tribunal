import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import TipoActoProcesalRol from '../entities/tipos-acto-procesal-rol.entity';
import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';
import { RolEntity } from 'src/autorizacion/roles/entities/rol.entity';

export class TipoActoProcesalRolSeeder implements Seeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const repository = dataSource.getRepository(TipoActoProcesalRol);
    const tipoActoProcesalRepository = dataSource.getRepository(TipoActoProcesal);
    const rolRepository = dataSource.getRepository(RolEntity);

    const data = [
      { idRol: 1, idTipoActoProcesal: 2 },
      { idRol: 2, idTipoActoProcesal: 2 },
      { idRol: 1, idTipoActoProcesal: 3 },
      { idRol: 2, idTipoActoProcesal: 4 },
      { idRol: 1, idTipoActoProcesal: 5 },
      { idRol: 2, idTipoActoProcesal: 5 },
      { idRol: 1, idTipoActoProcesal: 8 },
      { idRol: 2, idTipoActoProcesal: 8 },
      { idRol: 3, idTipoActoProcesal: 1 },
    ];

    for (const element of data) {
      const existeRol = await rolRepository.findOne({
        where: { id: element.idRol },
      });
      const existeTipoActoProcesal = await tipoActoProcesalRepository.findOne({
        where: { id: element.idTipoActoProcesal },
      });
      if (existeRol && existeTipoActoProcesal) {
        const temporal = repository.create(element);
        await repository.save(temporal);
      }
    }
  }
}
