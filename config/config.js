require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  postgres: {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    database: process.env.PG_DATABASE || 'express_api',
    user: process.env.PG_USER || 'foo',
    password: process.env.PG_PASSWORD || 'bar',
    poolSize: process.env.PG_POOL || 5
  }
}
