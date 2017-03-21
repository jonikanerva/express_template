const { validRequest } = require('../helpers/validator')
const { informationSchema } = require('../models/foo')

const validateFoo = {
  bar: { type: 'string', max: 50, min: 5 }
}

const indexRule = {
  name: { type: 'string' },
  color: ['red', 'blue']
}

const errorMessage = (res, error) => {
  console.log('query error', error)

  res.status(500).json({
    message: `${error.name}: ${error.code}`
  })
}

const indexFoo = (req, res, next) => {
  if (!validRequest(indexRule, res, req.query)) {
    return
  }

  informationSchema()
    .then(data => res.status(200).json(data))
    .catch(error => errorMessage(res, error))
}

const addFoo = (req, res, next) => {
  if (!validRequest(validateFoo, res, req.body)) {
    return
  }

  res.status(200).send()
}

module.exports = { indexFoo, addFoo }
