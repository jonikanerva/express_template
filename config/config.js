require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  database_url: process.env.DATABASE_URL || 'postgres://foo:bar@localhost/express_api'
}
