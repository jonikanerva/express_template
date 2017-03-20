require('dotenv').config()

const all = {
  environment: process.env.NODE_ENV || 'development'
}

const development = {
  port: process.env.PORT || 3000,
  database_url: process.env.DATABASE_URL || 'postgres://foo:bar@localhost/express_api'
}

const production = {
  port: process.env.PORT || 5000,
  database_url: process.env.DATABASE_URL
}

const config = (all.environment === 'production')
  ? Object.assign(all, production)
  : Object.assign(all, development)

module.exports = config
