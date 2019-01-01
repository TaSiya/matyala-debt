DROP TABLE clients, employees, overolls, debts ;

create table clients(
  id serial primary key not null,
  name text not null,
  username text not null,
  age int not null,
  address1 text not null
);
create table employees(
  id serial primary key not null,
  name text not null,
  username text not null,
  email text not null,
  password text not null
);
create table overolls(
  employee_id int not null,
  jobs_done int not null,
  client_id int not null,
  loaned int not null,
  generated int not null,
  time_stamp text not null,
  FOREIGN key (employee_id) references employees(id),
  FOREIGN KEY (client_id) references clients(id)
);
create table debts (
  total_loaned int not null,
  total_paid int not null,
  loan int not null,
  paying int not null,
  loaning int NULL,
  FOREIGN KEY (user_id) REFERENCES clients(id)
);

alter sequence clients_id_seq restart 1;
alter sequence employees_id_seq restart 1;
