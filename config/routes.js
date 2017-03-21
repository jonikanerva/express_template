const routes = require('express').Router()
const { indexFoo } = require('../app/controllers/foo')
const { root } = require('../app/controllers/root')

routes.get('/foo', indexFoo)
routes.get('/', root)

module.exports = routes
