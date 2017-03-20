require('dotenv').config()

// This object holds config variables that are available for ALL environments
const all = {
  environment: process.env.NODE_ENV || 'development'
}

// This object holds config variables that are ONLY available for test environment
const test = {
  port: process.env.TEST_PORT || 8000,
  database_url: process.env.TEST_DATABASE_URL
}

// This object holds config variables that are ONLY available for development environment
const development = {
  port: process.env.DEV_PORT || 3000,
  database_url: process.env.DEV_DATABASE_URL || 'postgres://foo:bar@localhost/express_api'
}

// This object holds config variables that are ONLY available for production environment
const production = {
  port: process.env.PORT || 5000,
  database_url: process.env.DATABASE_URL
}

const config = () => {
  switch (all.environment) {
    case 'test':
      return Object.assign(all, test)
    case 'production':
      return Object.assign(all, production)
    default:
      return Object.assign(all, development)
  }
}

module.exports = config()
