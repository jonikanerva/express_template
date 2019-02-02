import * as R from 'ramda'
import * as dotenv from 'dotenv'

const environment = R.isNil(process.env.DYNO) ? 'local' : 'heroku'

if (environment === 'local') {
  dotenv.config()
}

interface Config {
  environment: string
  port: string
  logLevel: string
}

export const config: Config = {
  environment,
  logLevel: environment === 'local' ? 'silly' : 'info',
  port: process.env.PORT || '3000'
}
