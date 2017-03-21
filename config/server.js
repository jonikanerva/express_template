// Add dependencies
const app = require('express')()
const helmet = require('helmet')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const routes = require('./routes')
const config = require('./config')

// Parse request body
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// Set HTTP headers
app.use(helmet())

// Set verbose logger for development environment
if (config.environment === 'development') {
  morgan.token('body', req => JSON.stringify(req.body))

  app.use(morgan(':method :url :status :response-time ms :body'))
}

// Add all routes
app.use('/', routes)

// Start server
app.listen(config.port, () => {
  console.log(`Running in ${config.environment} mode, port ${config.port}, db ${config.database_url}`)
})

// Export app for tests
module.exports = app
