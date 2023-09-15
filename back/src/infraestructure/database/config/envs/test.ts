export const config = {
  db: {
    type: process.env.TEST_DB_TYPE || 'postgres',
    synchronize: true,
    logging: false,
    host: process.env.TEST_DB_HOST || '127.0.0.1',
    port: process.env.TEST_DB_PORT || 5432,
    username: process.env.TEST_DB_USERNAME || 'postgres',
    password: process.env.TEST_DB_PASSWORD || 'postgres',
    database: process.env.TEST_DB_NAME || 'justicia_test',
    entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
    extra: {
      connectionLimit: 1,
    },
    autoLoadEntities: true,
  },
  foo: 'dev-bar',
};
