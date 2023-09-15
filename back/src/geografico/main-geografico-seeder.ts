import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { PaisSeeder } from './paises/seeds/pais-seeder';
import { DepartamentoSeeder } from './departamentos/seeds/departamento-seeder';
import { ProvinciaSeeder } from './provincias/seeds/provincia-seeder';
import { MunicipioSeeder } from './municipios/seeds/municipio-seeder';
import { CiudadSeeder } from './ciudades/seeds/ciudad-seeder';

export class MainSeederGeografico implements Seeder {
  track?: boolean;
  async run(dataSource: DataSource): Promise<any> {
    await runSeeder(dataSource, PaisSeeder);
    await runSeeder(dataSource, DepartamentoSeeder);
    await runSeeder(dataSource, ProvinciaSeeder);
    await runSeeder(dataSource, MunicipioSeeder);
    await runSeeder(dataSource, CiudadSeeder);
  }
}
