import { MainSeederGeografico } from 'src/geografico/main-geografico-seeder';
import { MainSeederOrg } from 'src/organizacional/main-org-seeder';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.LOCAL_DB_HOST || 'localhost',
  port: parseInt(process.env.LOCAL_DB_PORT) || 5432,
  username: process.env.LOCAL_DB_USERNAME || 'postgres',
  password: process.env.LOCAL_DB_PASSWORD || 'postgres',
  database: process.env.LOCAL_DB_NAME || 'justicia_local',
  // entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],

  seeds: [MainSeederGeografico, MainSeederOrg],
};

export const AppDataSource = new DataSource(options);
