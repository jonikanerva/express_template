import Parameter from 'parameter'
const parameter = new Parameter()

export function validate(rule, data) {
  const result = parameter.validate(rule, data)

  return result ? result : false
}
