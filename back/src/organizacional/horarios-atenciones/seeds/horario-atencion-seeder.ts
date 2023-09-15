import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import HorarioAtencion from '../entities/horario-atencion.entity';
import * as data from './data.json';

export class HorarioAtencionSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(HorarioAtencion);

    if (data.length > 0) {
      for (const element of data) {
       
        const horarioAtencion = repository.create(element);
        await repository.save(horarioAtencion);
        console.log(`Seed`);
      }
    } else {
      console.log('No hay data');
    }
  }
}
