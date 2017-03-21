exports.up = (pgm) => {
  pgm.sql('create table foo (bar varchar(50))')
  pgm.sql("insert into foo (bar) values ('baz')")
}

exports.down = (pgm) => {
  pgm.sql('drop table foo')
}
