create table category(
  id serial,
  cat_id varchar(7),
  cat_name varchar(150)
);


insert into category(cat_id, cat_name)
values('comp','computer'),('prt','print'),('tab','tablet'),('acc','accessory');