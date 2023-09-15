import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Municipio from '../entities/municipio.entity';
import * as data from './data.json';

export class MunicipioSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Municipio);

    if (data.length > 0) {
      for (const element of data) {
        const exist = await repository.findOneBy({
          codice: element.codice.toString(),
        });
        if (!exist) {
          const municipioTemporal = repository.create(element);
          await repository.save(municipioTemporal);
          console.log(`Seeded`);
        }
      }
    } else {
      console.log('No hay data');
    }
  }
}
