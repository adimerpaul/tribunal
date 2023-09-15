import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import TipoActoProcesalEtapaCausa from '../entities/tipos-actos-procesales-etapas-causa.entity';
import * as data from './data.json';

export class TipoActosProcesalesTiposEtapasCausaSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(TipoActoProcesalEtapaCausa);

    if (data.length > 0) {
      for (const element of data) {
        const exist = await repository.findOneBy({
          idTipoActoProcesal: element.idTipoActoProcesal,
          idTipoEtapa: element.idTipoEtapa,
        });
        if (!exist) {
          const Temporal = repository.create(element);
          await repository.save(Temporal);
          console.log(element);
        }
      }
    } else {
      console.log('No hay data');
    }
  }
}
