import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { PersonasSeeder } from './personas/seeds/personas.seeders';

export class MainSeeder implements Seeder {
  track?: boolean;
  async run(dataSource: DataSource): Promise<any> {
    await runSeeder(dataSource, PersonasSeeder);
  }
}
