import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import TipoActoProcesalEstadoCausa from '../entities/tipos-actos-procesales-estados-causa.entity';
import TipoActoProcesal from 'src/catalogo/tipos-actos-procesales/entities/tipo-acto-procesal.entity';
import TipoEstadoCausa from 'src/catalogo/tipos-estados-causas/entities/tipo-estado-causa.entity';

export class TipoActoProcesalEstadoCausaSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(TipoActoProcesalEstadoCausa);
    const tipoActoProcesalRepository = dataSource.getRepository(TipoActoProcesal);
    const tipoEstadoCausaRepository = dataSource.getRepository(TipoEstadoCausa);

    const data = [
      { idTipoActoProcesal: 6, idTipoEstado: 1 },
      { idTipoActoProcesal: 5, idTipoEstado: 3 },
      { idTipoActoProcesal: 6, idTipoEstado: 2 },
      { idTipoActoProcesal: 6, idTipoEstado: 4 },
      { idTipoActoProcesal: 5, idTipoEstado: 2 },
      { idTipoActoProcesal: 4, idTipoEstado: 1 },
      { idTipoActoProcesal: 4, idTipoEstado: 3 },
      { idTipoActoProcesal: 7, idTipoEstado: 1 },
      { idTipoActoProcesal: 8, idTipoEstado: 1 },
      { idTipoActoProcesal: 9, idTipoEstado: 1 },
    ];

    for (const element of data) {
      const existeTipoActoProcesal = await tipoActoProcesalRepository.findOneBy({
        id: element.idTipoActoProcesal,
      });
      const existeTipoEstadoCausa = await tipoEstadoCausaRepository.findOneBy({
        id: element.idTipoEstado,
      });
      if (existeTipoActoProcesal && existeTipoEstadoCausa) {
        const temporal = repository.create(element);
        await repository.save(temporal);
      }
    }
  }
}
