import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import TipoEtapaCausa from '../entities/tipo-etapa-causa.entity';
import * as data from './data.json';

export class TiposEtapasCausasSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(TipoEtapaCausa);

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Tipos Etapas Causas');
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
