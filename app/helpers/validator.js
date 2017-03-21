const Parameter = require('parameter')
const parameter = new Parameter()

const validRequest = (rule, res, data) => {
  const result = parameter.validate(rule, data)

  if (result) {
    res.status(400).json(result)

    return false
  }

  return true
}

const queryError = (res, error) => {
  console.log('query error', error)

  res.status(500).json({
    message: `${error.name}: ${error.code}`
  })
}

module.exports = { validRequest, queryError }
