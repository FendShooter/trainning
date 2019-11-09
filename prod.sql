
create table products(
  id serial,
  cat_id varchar(7),
  prod_name varchar(150),
  price dec,
  qty dec,
  avail bool default true,
  foreign key(cat_id) references category(cat_id) on update cascade on delete cascade
);


insert into category(cat_id, prod_name, price,qty,avail)
values('comp','hp pavillion i5',450, 2, default),
('acc','HDMI cable 12 feet',50, 3, default),
('prt','hp envy 7663',150, 1, false),
('tab','Apple ipad 205 GB',1550, 2, default),
('comp','Accer i3',150, 2, false),
('comp','lenovo i9',350, 2, default),
('tab','samsung tab A5',856,3 , default),