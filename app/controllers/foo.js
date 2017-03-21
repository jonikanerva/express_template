const validate = require('../helpers/validator')
const { informationSchema } = require('../models/foo')

const foo = (req, res, next) => {
  const rule = {
    name: { type: 'string' },
    color: ['red', 'blue']
  }

  const errors = validate(rule, req.query)

  if (errors) {
    res.status(400).json(errors)
    return
  }

  informationSchema()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      const message = {
        message: `${error.name}: ${error.code}`
      }

      console.log('query error', error)
      res.status(500).json(message)
    })
}

module.exports = { foo }
