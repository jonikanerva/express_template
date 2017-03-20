// Add dependencies
const app = require('express')()
const helmet = require('helmet')
const routes = require('./routes/routes')
const config = require('./config/config')

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
