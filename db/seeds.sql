INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 1, 1),
  ('Piers', 'Gaveston', 1, 0),
  ('Charles', 'LeRoi', 2, 1),
  ('Katherine', 'Mansfield', 2, 1),
  ('Dora', 'Carrington', 3, 0),
  ('Edward', 'Bellamy', 3, 0),
  ('Montague', 'Summers', 3, 1),
  ('Octavia', 'Butler', 3, 1),
  ('Unica', 'Zurn', NULL, 1);


  insert into position (position, salary, department) values('Manager', 200000, 1);
 insert into position(position, salary, department) values('Engineer', 220000,2 );
 insert into position(position, salary, department) values('Accountant', 240000, 3);
 insert into position(position, salary, department) values('Administration', 20000, 4);


insert into department(name)
values ('Management'),
       ('Engineering'),
       ('Accounting'),
       ('Marketing'),
       ('Human Resources');
