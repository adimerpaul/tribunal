import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Persona from '../entities/persona.entity';
import * as data from './data.json';

export class PersonasSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Persona);

    try {
      if (data.length > 0) {
        for (const element of data) {
          const existe = await repository.findOneBy({
            documentoIdentidad: element.documentoIdentidad,
          });
          if (!existe) {
            const item = repository.create(element);
            await repository.save(item);
            console.log(`${element.documentoIdentidad} ... seeded!`);
          } else {
            console.log(`~~~ ${element.documentoIdentidad} ... not seeded!`);
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
