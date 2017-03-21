const routes = require('express').Router()
const { indexFoo, postFoo } = require('../app/controllers/foo')
const { root } = require('../app/controllers/root')

routes.post('/foo', postFoo)
routes.get('/foo', indexFoo)
routes.get('/', root)

module.exports = routes
