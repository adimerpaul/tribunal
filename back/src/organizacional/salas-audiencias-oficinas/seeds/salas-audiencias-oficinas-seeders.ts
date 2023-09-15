import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import SalaAudienciaOficina from '../entities/salas-audiencias-oficina.entity';
import * as data from './data.json';

export class SalasAudienciasOficinasSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(SalaAudienciaOficina);

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Sala Audiencia Oficina');
        for (const element of data) {
          const existe = await repository.findOneBy({
            idSalaAudiencia: element.idSalaAudiencia,
            idOficina: element.idOficina,
          });
          if (!existe) {
            const item = repository.create(element);
            await repository.save(item);
            console.log(element);
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
