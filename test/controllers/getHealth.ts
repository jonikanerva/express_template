import 'jest'
import * as supertest from 'supertest'
import { app } from '../../app/app'
import * as healthResponse from '../fixtures/getHealthResponse.json'

describe('health endpoint', () => {
  it('returns 200', () =>
    supertest(app)
      .get('/health')
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.body).toEqual(healthResponse)
      }))
})
