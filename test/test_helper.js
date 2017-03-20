const chai = require('chai')
const app = require('../app')
const assert = chai.assert
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

module.exports = { app, chai, assert }
