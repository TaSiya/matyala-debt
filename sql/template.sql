DROP TABLE clients, debts ;
create table clients(
  id serial primary key not null,
  name text not null,
  username text not null,
  age int not null,
  address1 text not null,
  address2 text not null,
  address3 int not null
);
alter sequence clients_id_seq RESTART 1;
create table debts (
  r1 int not null,
  r1paid int not null,
  game int not null,
  gamepaid int not null,
  user_id int NULL,
  FOREIGN KEY (user_id) REFERENCES clients(id)
)
