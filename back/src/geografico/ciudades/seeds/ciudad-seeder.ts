import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Ciudad from '../entities/ciudad.entity';
import * as data from './data.json';

export class CiudadSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Ciudad);

    if (data.length > 0) {
      for (const element of data) {
        const exist = await repository.findOneBy({
          descripcion: element.descripcion,
        });
        if (!exist) {
          const ciudadTemporal = repository.create(element);
          await repository.save(ciudadTemporal);
          console.log(`Seeded`);
        }
      }
    } else {
      console.log('No hay data');
    }
  }
}
