create table category(
  id serial,
  cat_id varchar(7),
  cat_name varchar(150)
);


create table products(
  id serial,
  cat_id varchar(7),
  prod_name varchar(150),
  price dec,
  qty dec,
  avail bool default true,
  foreign key(cat_id) references category(cat_id) on update cascade on delete cascade
)