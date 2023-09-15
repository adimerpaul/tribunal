import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import SalaAudiencia from '../entities/sala-audiencia.entity';
import * as data from './data.json';

export class SalasAudienciasSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(SalaAudiencia);

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Sala Audiencia');
        for (const element of data) {
          const existe = await repository.findOneBy({
            descripcion: element.descripcion,
            ubicacion: element.ubicacion,
          });
          if (!existe) {
            const item = repository.create(element);
            await repository.save(item);
            console.log(`${element.descripcion} ... seeded!`);
          } else {
            console.log(`~~~ ${element.descripcion} ... not seeded!`);
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
