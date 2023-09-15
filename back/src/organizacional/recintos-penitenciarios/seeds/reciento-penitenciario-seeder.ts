import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import RecintoPenitenciario from '../entities/recinto-penitenciario.entity';
import * as data from './data.json';

export class RecintoPenitenciarioSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(RecintoPenitenciario);

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Recinto Penitenciario');
        for (const element of data) {
          const item = repository.create(element);
          await repository.save(item);
          console.log(`+ ${element.descripcion} ... seeded!`);
        }
      } else {
        console.log("Data don't exist.");
      }
    } catch (e: any) {
      console.log(`Error: ${e.name} - ${e.message}`);
    }
  }
}
