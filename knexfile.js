
var types = require('pg').types;
// override parsing date column to Date()
types.setTypeParser(1082, val => val);

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    pool: { min: 2, max: 10 },

    useNullAsDefault: true
  }
};
