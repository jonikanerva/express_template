/* eslint-env mocha */

const { app, chai, assert } = require('../test_helper')

describe('GET /', () => {
  it('should return response', done => {
    chai.request(app)
      .get('/')
      .set('Authorization', 'foobar')
      .end((err, res) => {
        assert.equal(err, null, JSON.stringify(res.body))
        assert.equal(res.status, 200)
        assert.equal(res.type, 'application/json')

        assert.propertyVal(res.body, 'message', 'hello world')

        done()
      })
  })

  it('should return 404 on invalid url', done => {
    chai.request(app)
      .get('/not_a_valid_url')
      .set('Authorization', 'foobar')
      .end((err, res) => {
        assert.notEqual(err, null)
        assert.equal(res.status, 404)

        done()
      })
  })

  it('should authenticate with query param', done => {
    chai.request(app)
      .get('/')
      .query({'api_key': 'foobar'})
      .end((err, res) => {
        assert.equal(err, null)
        assert.equal(res.status, 200)

        done()
      })
  })

  it('should not authenticate with invalid api key param', done => {
    chai.request(app)
      .get('/')
      .query({'api_key': 'foobari'})
      .end((err, res) => {
        assert.propertyVal(err, 'message', 'Unauthorized')
        assert.equal(res.status, 401)

        done()
      })
  })

  it('should not authenticate with invalid api key header', done => {
    chai.request(app)
      .get('/')
      .set('Authorization', 'foobari')
      .end((err, res) => {
        assert.propertyVal(err, 'message', 'Unauthorized')
        assert.equal(res.status, 401)

        done()
      })
  })
})
