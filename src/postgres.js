const config = require('../config/config')
const pgp = require('pg-promise')()
const db = pgp(config.database_url)

module.exports = db
