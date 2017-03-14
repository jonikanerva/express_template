const routes = require('express').Router()

import { foo } from './foo'
import { root } from './root'

routes.all('/foo', foo)
routes.all('/', root)

module.exports = routes
