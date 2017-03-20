exports.up = function (pgm) {
  pgm.sql('create table foo (bar varchar(50))')
}

exports.down = function (pgm) {
  pgm.sql('drop table foo')
}
