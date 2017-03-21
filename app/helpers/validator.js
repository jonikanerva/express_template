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

module.exports = { validRequest }
