import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './main-seeder';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.LOCAL_DB_HOST || 'localhost',
  port: parseInt(process.env.LOCAL_DB_PORT) || 5432,
  username: process.env.LOCAL_DB_USERNAME || 'postgres',
  password: process.env.LOCAL_DB_PASSWORD || 'postgres',
  database: process.env.LOCAL_DB_NAME || 'justicia_local',
  // entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],

  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(options);
