import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import * as data from './data.json';
import TipoNivelEducacion from '../entities/tipos-nivel-educacion.entity';

export class TiposNivelEducacionSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(TipoNivelEducacion);

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Tipo nivel Educacion');
        for (const element of data) {
          const existe = await repository.findOneBy({
            descripcion: element.descripcion,
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
