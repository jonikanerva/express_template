const Parameter = require('parameter')
const parameter = new Parameter()

const validate = (rule, data) => {
  const result = parameter.validate(rule, data)

  return result
}

module.exports = validate
