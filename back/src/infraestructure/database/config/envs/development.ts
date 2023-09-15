export const config = {
  db: {
    type: process.env.DEV_DB_TYPE || 'postgres',
    synchronize: false,
    logging: false,
    host: process.env.DEV_DB_HOST || '127.0.0.1',
    port: process.env.DEV_DB_PORT || 5432,
    username: process.env.DEV_DB_USERNAME || 'postgres',
    password: process.env.DEV_DB_PASSWORD || '12345678',
    database: process.env.DEV_DB_NAME || 'justicia_dev',
    entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
    extra: {
      connectionLimit: 1,
    },
    autoLoadEntities: true,
  },
  foo: 'dev-bar',
};
