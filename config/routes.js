const routes = require('express').Router()
const { foo } = require('../app/controllers/foo')
const { root } = require('../app/controllers/root')

routes.get('/foo', foo)
routes.get('/', root)

module.exports = routes
