import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Feriado from '../entities/feriado.entity';

import * as data from './data.json';

export class FeriadoSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Feriado);

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Feriados ');
        for (const element of data) {
          const existe = await repository.findOneBy({
            descripcion: element.descripcion,
          });
          if (!existe) {
            const item = repository.create(element);
            await repository.save(item);
            console.log(`${element.descripcion} ... seeded!`);
          } else {
            console.log(`${element.descripcion} ... not seeded!`);
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
