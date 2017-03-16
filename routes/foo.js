const validate = require('../src/validator')

const foo = (req, res, next) => {
  const rule = {
    name: { type: 'string' },
    color: ['red', 'blue'],
  }

  const errors = validate(rule, req.query)

  if (errors) {
    res.status(400).json(errors)
    return
  }

  const data = {
    foo: 'bar',
    bar: 'baz'
  }

  res.status(200).json(data)
}

module.exports = foo
