/* eslint-env mocha */

const chai = require('chai')
const app = require('../app')
const assert = chai.assert
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('GET /', () => {
  it('should return response', (done) => {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        assert.equal(err, null)
        assert.equal(res.status, 200)
        assert.equal(res.type, 'application/json')

        assert.property(res.body, 'message', 'hello world')

        done()
      })
  })

  it('should return 404 on invalid url', (done) => {
    chai.request(app)
      .get('/not_a_valid_url')
      .end(function (err, res) {
        assert.notEqual(err, null)
        assert.equal(res.status, 404)

        done()
      })
  })
})
