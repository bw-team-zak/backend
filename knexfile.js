if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const pgConnection = process.env.DATABASE_URL
module.exports = {
  
  // development: {
  //   client: 'sqlite3',
  //   connection: { filename: './data/med-cabinet.db3' },
  //   useNullAsDefault: true,
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       conn.run('PRAGMA foreign_keys = ON', done)
  //     }
  //   },
  //   migrations: {
  //     directory: './data/migrations',
  //   },
  //   seeds: { directory: './data/seeds' },
  // },

  development: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
},

  staging: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
},
  
  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};