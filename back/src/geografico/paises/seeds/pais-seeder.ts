import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Pais from '../entities/pais.entity';
import * as data from './data.json';

export class PaisSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Pais);

    if (data.length > 0) {
      for (const element of data) {
        const exist = await repository.findOneBy({
          descripcion: element.descripcion,
        });
        if (!exist) {
          const paisTemporal = repository.create(element);
          await repository.save(paisTemporal);
          console.log(`Seeded`);
        }
      }
    } else {
      console.log('No hay data');
    }
  }
}
