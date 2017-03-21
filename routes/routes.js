const routes = require('express').Router()
const foo = require('./foo')
const root = require('./root')

routes.get('/foo', foo)
routes.get('/', root)

module.exports = routes
