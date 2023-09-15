import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import TipoActoProcesalTipoAudiencia from '../entities/tipos-actos-procesales-tipos-audiencia.entity';
import * as data from './data.json';

export class TiposActosProcesalesTiposAudienciasSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(TipoActoProcesalTipoAudiencia);

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Tipo Acto Procesal - Tipo Sala Audiencia');
        for (const element of data) {
          const existe = await repository.findOneBy({
            idTipoActoProcesal: element.idTipoActoProcesal,
            idTipoAudiencia: element.idTipoAudiencia,
          });
          if (!existe) {
            const item = repository.create(element);
            await repository.save(item);
            console.log(element);
          }
        }
      } else {
        console.log("Data don't exist.");
      }
    } catch (e: any) {
      console.log(`Error: ${e.name} - ${e.message}`);
    }
  }
}
