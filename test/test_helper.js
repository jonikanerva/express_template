// This file contains the configuration of the test framework.
// you should include this file and import the exported functions in your tests

const chai = require('chai')
const app = require('../config/server')
const assert = chai.assert
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

module.exports = { app, chai, assert }
