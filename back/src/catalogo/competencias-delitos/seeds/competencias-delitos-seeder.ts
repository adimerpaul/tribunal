import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import CompetenciaDelito from '../entities/competencias-delito.entity';
import * as data from './data.json';

export class DelitoSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(CompetenciaDelito);
    console.log(repository); //terminar el trabajo

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Competencia Delito');
        for (const element of data) {
            console.log(`+ ${element.idDelito} ... seeded!`);
          }
      } else {
        console.log("Data don't exist.");
      }
    } catch (e: any) {
      console.log(`Error: ${e.name} - ${e.message}`);
    }
  }
}
