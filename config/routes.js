const routes = require('express').Router()
const { indexFoo, postFoo } = require('../app/controllers/foo')
const { root } = require('../app/controllers/root')

const apiKey = (req) => req.headers.authorization || req.query['api_key']

// Authenticate all requests
routes.use('/', (req, res, next) => {
  if (apiKey(req) !== 'foobar') {
    res.status(401).json({ message: 'Unauthorized!' })

    return
  }

  next()
})

routes.post('/foo', postFoo)
routes.get('/foo', indexFoo)
routes.get('/', root)

module.exports = routes
