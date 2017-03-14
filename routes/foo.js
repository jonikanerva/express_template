export function foo(req, res, next) {
  const data = {
    foo: 'bar',
    bar: 'baz'
  }

  res.status(200).json(data)
}
