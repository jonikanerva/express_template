exports.up = (pgm) => {
  pgm.sql('create table foo (bar varchar(50))')
}

exports.down = (pgm) => {
  pgm.sql('drop table foo')
}
