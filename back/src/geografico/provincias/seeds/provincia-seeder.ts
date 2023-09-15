import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Provincia from '../entities/provincia.entity';
import * as data from './data.json';

export class ProvinciaSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Provincia);

    if (data.length > 0) {
      for (const element of data) {
        const exist = await repository.findOneBy({
          codice: element.codice,
        });
        if (!exist) {
          const ProvinciaTemporal = repository.create(element);
          await repository.save(ProvinciaTemporal);
          console.log(`Seeded`);
        }
      }
    } else {
      console.log('No hay data');
    }
  }
}
