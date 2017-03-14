import chai from 'chai'
import app from '../app'
import { expect } from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe('GET /foo', () => {
  it('should return response on valid input', (done) => {
    chai.request(app)
      .get('/foo?name=bob&color=red')
      .end(function(err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.have.property('foo', 'bar')
        expect(res.body).to.have.property('bar', 'baz')
        done()
    })
  })

  it('should return 400 on invalid color', (done) => {
    chai.request(app)
      .get('/foo?name=bob&color=green')
      .end(function(err, res) {
        const error = res.body[0]

        expect(res).to.have.status(400)
        expect(res).to.be.json
        expect(res.body).to.be.array
        expect(res.body.length).to.equal(1)

        expect(error).to.have.property('message', 'should be one of red, blue')
        expect(error).to.have.property('code', 'invalid')
        expect(error).to.have.property('field', 'color')

        done()
    })
  })

  it('should return 400 on missing name', (done) => {
    chai.request(app)
      .get('/foo?color=red')
      .end(function(err, res) {
        const error = res.body[0]

        expect(res).to.have.status(400)
        expect(res).to.be.json
        expect(res.body).to.be.array
        expect(res.body.length).to.equal(1)

        expect(error).to.have.property('message', 'required')
        expect(error).to.have.property('code', 'missing_field')
        expect(error).to.have.property('field', 'name')

        done()
    })
  })
})
