import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { RolEntity } from '../entities/rol.entity';
import * as data from './data.json';
export class RolesSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(RolEntity);

    try {
      if (data.length > 0) {
        for (const itemData of data) {
          const existe = await repository.findOneBy({
            codigo: itemData.codigo,
          });
          if (!existe) {
            const item = repository.create(itemData);
            const dataAux = await repository.save(item);
            console.log('Aux:::', dataAux);
            console.log(`${itemData.codigo} ... seeded!`);
          } else {
            console.log(`~~~ ${itemData.codigo} ... not seeded!`);
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
