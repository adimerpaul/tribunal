import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Delito from '../entities/delito.entity';
import * as data from './data.json';

export class DelitoSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Delito);

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Delito');
        for (const element of data) {
          const existeDescripcion = await repository.findOneBy({
            descripcion: element.descripcion,
          });
          if (!existeDescripcion) {
            const item = repository.create(element);
            await repository.save(item);
            console.log(`+ ${element.descripcion} ... seeded!`);
          } else {
            console.log(`~ ${element.descripcion} (exist) ... not seeded!`);
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
