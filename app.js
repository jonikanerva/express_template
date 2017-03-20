// Add dependencies
const app = require('express')()
const helmet = require('helmet')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const routes = require('./routes/routes')
const config = require('./config/config')

// Set verbose logger for development environment
if (config.environment !== 'production') {
  app.use(bodyparser.json())
  app.use(bodyparser.urlencoded({ extended: true }))

  morgan.token('body', (req, res) => JSON.stringify(req.body))

  app.use(morgan(':method :url :status :response-time ms :body'))
}

// Set HTTP headers
app.use(helmet())

// Add all routes
app.use('/', routes)

// Start server
app.listen(config.port, () => {
  console.log('Running %s site at: http://localhost:%d', config.environment, config.port)
})

// Export app for tests
module.exports = app
