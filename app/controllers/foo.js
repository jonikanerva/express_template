const { validRequest, queryError } = require('../helpers/validator')
const { informationSchema, insertFoo } = require('../models/foo')

// These are the rules for validating a foo -record
const validateFoo = {
  bar: { type: 'string', max: 50, min: 5 }
}

// This is a custom rule for query parameters
const indexRule = {
  name: { type: 'string' },
  color: ['red', 'blue']
}

const indexFoo = (req, res, next) => {
  if (!validRequest(indexRule, res, req.query)) {
    return
  }

  informationSchema()
    .then(data => res.status(200).json(data))
    .catch(error => queryError(res, error))
}

const postFoo = (req, res, next) => {
  if (!validRequest(validateFoo, res, req.body)) {
    return
  }

  insertFoo(req.body)
    .then(data => res.status(200).send())
    .catch(error => queryError(res, error))
}

module.exports = { indexFoo, postFoo }
