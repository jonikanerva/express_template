import express from 'express'
import { getHealth } from './controllers/getHealth'
import { defaultError } from './controllers/defaultError'

const app: express.Application = express()

app.disable('x-powered-by')

app.get('/health', getHealth)

app.use(defaultError)

export { app }
