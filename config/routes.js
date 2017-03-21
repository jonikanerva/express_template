const routes = require('express').Router()
const { indexFoo, addFoo } = require('../app/controllers/foo')
const { root } = require('../app/controllers/root')

routes.post('/foo', addFoo)
routes.get('/foo', indexFoo)
routes.get('/', root)

module.exports = routes
