import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './main-seeder';

console.log('ENVS::: ', process.env);
const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.LOCAL_DB_HOST || 'localhost',
  port: parseInt(process.env.LOCAL_DB_PORT) || 5432,
  username: process.env.LOCAL_DB_USERNAME || 'justicia',
  password: process.env.LOCAL_DB_PASSWORD || 'justicia',
  database: process.env.LOCAL_DB_NAME || 'justicia_test',
  // entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],

  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(options);
