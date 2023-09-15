import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import DelitoDetalle from '../entities/delitos-detalle.entity';
import * as data from './data.json';

export class DelitoDetalleSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(DelitoDetalle);

    try {
      if (data.length > 0) {
        console.log('-'.repeat(25) + ' Detalle Delito');
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
