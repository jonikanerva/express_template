const routes = require('express').Router()
const foo = require('./foo')
const root = require('./root')

routes.all('/foo', foo)
routes.all('/', root)

module.exports = routes
