// var pg = require('pg');

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:6543/',
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
