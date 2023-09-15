export const config = {
  db: {
    type: process.env.LOCAL_DB_TYPE || 'postgres',
    synchronize: true,
    logging: false,
    host: process.env.LOCAL_DB_HOST || 'localhost',
    port: process.env.LOCAL_DB_PORT || 5432,
    username: process.env.LOCAL_DB_USERNAME || 'postgres',
    password: process.env.LOCAL_DB_PASSWORD || '12345678',
    database: process.env.LOCAL_DB_NAME || 'justicia_local',
    entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
    extra: {
      connectionLimit: 1,
    },
    autoLoadEntities: true,

    // entities: [`${__dirname}/../../entity/**/*.{js,ts}`],
    // subscribers: [`${__dirname}/../../subscriber/**/*.{js,ts}`],
    // migrations: [`${__dirname}/../../migration/**/*.{js,ts}`],
  },
  graphql: {
    debug: true,
    playground: {
      settings: {
        'request.credentials': 'include',
      },
    },
    autoSchemaFile: true,
    autoTransformHttpErrors: true,
    // cors: { credentials: true },
    // sortSchema: true,
    // installSubscriptionHandlers: true,
  },
  hello: 'world',
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
};
