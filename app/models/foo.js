const db = require('../helpers/postgres')

const informationSchema = () => db.any(`select
    column_name, data_type, character_maximum_length
    from INFORMATION_SCHEMA.COLUMNS
    where table_name = $1`, 'foo')

const getAll = () => db.any('select * from foo')

const getOne = (bar) => db.one('select * from foo where bar = $1', bar)

module.exports = {
  getAll,
  getOne,
  informationSchema
}
