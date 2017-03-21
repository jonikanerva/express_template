/* eslint-env mocha */

const { app, chai, assert } = require('../test_helper')

describe('GET /', () => {
  it('should return response', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
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
      .end((err, res) => {
        assert.notEqual(err, null)
        assert.equal(res.status, 404)

        done()
      })
  })
})
