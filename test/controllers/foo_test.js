/* eslint-env mocha */

const { app, chai, assert } = require('../test_helper')

describe('GET /foo', () => {
  it('should return response on valid input', (done) => {
    chai.request(app)
      .get('/foo?name=bob&color=red')
      .end((err, res) => {
        const first = res.body[0]

        assert.equal(err, null)
        assert.equal(res.status, 200)
        assert.equal(res.type, 'application/json')

        assert.property(first, 'column_name', 'bar')
        assert.property(first, 'data_type', 'character varying')
        assert.property(first, 'character_maximum_length', 50)

        done()
      })
  })

  it('should return 400 on invalid color', (done) => {
    chai.request(app)
      .get('/foo?name=bob&color=green')
      .end((err, res) => {
        const error = res.body[0]

        assert.equal(res.status, 400)
        assert.equal(res.type, 'application/json')
        assert.notEqual(err, null)

        assert.typeOf(res.body, 'array')
        assert.lengthOf(res.body, 1)

        assert.property(error, 'message', 'should be one of red, blue')
        assert.property(error, 'code', 'invalid')
        assert.property(error, 'field', 'color')

        done()
      })
  })

  it('should return 400 on missing name', (done) => {
    chai.request(app)
      .get('/foo?color=red')
      .end((err, res) => {
        const error = res.body[0]

        assert.equal(res.status, 400)
        assert.equal(res.type, 'application/json')
        assert.notEqual(err, null)

        assert.typeOf(res.body, 'array')
        assert.lengthOf(res.body, 1)

        assert.property(error, 'message', 'required')
        assert.property(error, 'code', 'missing_field')
        assert.property(error, 'field', 'name')

        done()
      })
  })
})
