import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeederOrg } from './main-org-seeder';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.LOCAL_DB_HOST || 'localhost',
  port: parseInt(process.env.LOCAL_DB_PORT) || 5432,
  username: process.env.LOCAL_DB_USERNAME || 'justicia',
  password: process.env.LOCAL_DB_PASSWORD || 'justicia',
  database: process.env.LOCAL_DB_NAME || 'justicia_dev',
  // entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],

  seeds: [MainSeederOrg],
};

export const AppDataSource = new DataSource(options);
