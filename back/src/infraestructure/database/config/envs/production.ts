export const config = {
  db: {
    type: process.env.PROD_DB_TYPE || 'postgres',
    synchronize: false,
    logging: false,
    replication: {
      master: {
        host: process.env.PROD_DB_HOST || 'masterHost',
        port: process.env.PROD_DB_PORT || 3306,
        username: process.env.PROD_DB_USER || 'username',
        password: process.env.PROD_DB_PASSWORD || 'password',
        database: process.env.PROD_DB_NAME || 'dbname',
      },
      slaves: [
        {
          // fix if necessary
          host: 'slaveHost',
          port: 3306,
          username: 'username',
          password: `password`,
          database: 'dbname',
        },
      ],
    },
    extra: {
      connectionLimit: 30,
    },
    autoLoadEntities: true,
  },
  graphql: {
    debug: false,
    playground: false,
  },
  foo: 'pro-bar',
};
