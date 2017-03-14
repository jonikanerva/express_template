import { validate } from '../src/validator'

export function foo(req, res, next) {
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
