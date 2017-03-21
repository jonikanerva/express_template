/* eslint-env mocha */

const { assert } = require('../test_helper')
const { getAll, getOne, informationSchema } = require('../../app/models/foo')

describe('fetch from foo', () => {
  it('select all', () => {
    return getAll().then((data) => {
      assert.typeOf(data, 'array')
      assert.lengthOf(data, 1)
    })
  })

  it('select one', () => {
    return getOne('baz').then((data) => {
      assert.typeOf(data, 'object')
      assert.propertyVal(data, 'bar', 'baz')
    })
  })

  it('information schema', () => {
    return informationSchema().then((data) => {
      const first = data[0]

      assert.typeOf(data, 'array')

      assert.propertyVal(first, 'column_name', 'bar')
      assert.propertyVal(first, 'data_type', 'character varying')
      assert.propertyVal(first, 'character_maximum_length', 50)
    })
  })
})
