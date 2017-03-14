import chai from 'chai'
import app from '../app'
import { expect } from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe('GET /', () => {
  it('should return response', (done) => {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.have.property('message', 'hello world')
        done()
    })
  })

  it('should return 404 on invalid url', (done) => {
    chai.request(app)
      .get('/not_a_valid_url')
      .end(function(err, res) {
        expect(res).to.have.status(404)
        done()
    })
  })
})
