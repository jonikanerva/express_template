const { validRequest, queryError } = require('../helpers/validator')
const { informationSchema, insertFoo } = require('../models/foo')

const validateFoo = {
  bar: { type: 'string', max: 50, min: 5 }
}

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

const addFoo = (req, res, next) => {
  if (!validRequest(validateFoo, res, req.body)) {
    return
  }

  insertFoo(req.body)
    .then(data => res.status(200).send())
    .catch(error => queryError(res, error))
}

module.exports = { indexFoo, addFoo }
