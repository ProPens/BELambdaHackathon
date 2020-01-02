// var pg = require('pg');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
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
