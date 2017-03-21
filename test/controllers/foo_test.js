/* eslint-env mocha */

const { app, chai, assert } = require('../test_helper')

describe('GET /foo', () => {
  it('should return response on valid input', done => {
    chai.request(app)
      .get('/foo')
      .set('Authorization', 'foobar')
      .query({name: 'bob', color: 'red'})
      .end((err, res) => {
        const first = res.body[0]

        assert.equal(err, null, JSON.stringify(res.body))
        assert.equal(res.status, 200)
        assert.equal(res.type, 'application/json')

        assert.propertyVal(first, 'column_name', 'bar')
        assert.propertyVal(first, 'data_type', 'character varying')
        assert.propertyVal(first, 'character_maximum_length', 50)

        done()
      })
  })

  it('should return 400 on invalid color', done => {
    chai.request(app)
      .get('/foo')
      .set('Authorization', 'foobar')
      .query({name: 'bob', color: 'green'})
      .end((err, res) => {
        const error = res.body[0]

        assert.equal(res.status, 400)
        assert.equal(res.type, 'application/json')
        assert.notEqual(err, null)

        assert.typeOf(res.body, 'array')
        assert.lengthOf(res.body, 1)

        assert.propertyVal(error, 'message', 'should be one of red, blue')
        assert.propertyVal(error, 'code', 'invalid')
        assert.propertyVal(error, 'field', 'color')

        done()
      })
  })

  it('should return 400 on missing name', done => {
    chai.request(app)
      .get('/foo')
      .set('Authorization', 'foobar')
      .query({color: 'red'})
      .end((err, res) => {
        const error = res.body[0]

        assert.equal(res.status, 400)
        assert.equal(res.type, 'application/json')
        assert.notEqual(err, null)

        assert.typeOf(res.body, 'array')
        assert.lengthOf(res.body, 1)

        assert.propertyVal(error, 'message', 'required')
        assert.propertyVal(error, 'code', 'missing_field')
        assert.propertyVal(error, 'field', 'name')

        done()
      })
  })
})

describe('POST /foo', () => {
  it('should add foo on valid input', done => {
    chai.request(app)
      .post('/foo')
      .set('Authorization', 'foobar')
      .send({ bar: 'bobby' })
      .end((err, res) => {
        assert.equal(err, null, JSON.stringify(res.body))
        assert.equal(res.status, 200)

        done()
      })
  })

  it('should not add foo on invalid input', done => {
    chai.request(app)
      .post('/foo')
      .set('Authorization', 'foobar')
      .send({ bar: 'bob' })
      .end((err, res) => {
        const error = res.body[0]

        assert.notEqual(err, null)
        assert.equal(res.status, 400)
        assert.equal(res.type, 'application/json')

        assert.typeOf(res.body, 'array')
        assert.lengthOf(res.body, 1)

        assert.propertyVal(error, 'message', 'length should bigger than 5')
        assert.propertyVal(error, 'code', 'invalid')
        assert.propertyVal(error, 'field', 'bar')

        done()
      })
  })
})
