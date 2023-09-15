import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Departamento from '../entities/departamento.entity';
import * as data from './data.json';

export class DepartamentoSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Departamento);

    if (data.length > 0) {
      for (const element of data) {
        const exist = await repository.findOneBy({
          descripcion: element.descripcion,
        });
        if (!exist) {
          const DepartamentoTemporal = repository.create(element);
          await repository.save(DepartamentoTemporal);
          console.log(`Seeded`);
        }
      }
    } else {
      console.log('No hay data');
    }
  }
}
