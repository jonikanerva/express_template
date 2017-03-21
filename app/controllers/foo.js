const validate = require('../helpers/validator')
const db = require('../helpers/postgres')

const exampleData = () => db.any(`select
    column_name, data_type, character_maximum_length
    from INFORMATION_SCHEMA.COLUMNS
    where table_name = $1`, 'foo')

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

  exampleData()
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

module.exports = foo
