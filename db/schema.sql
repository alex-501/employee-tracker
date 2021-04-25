CREATE TABLE employee (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  Last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES employeerole(id),
    FOREIGN KEY (manager_id) REFERENCES employeerole(id)
);


INSERT INTO employee (first_name, last_name, party_id, industry_connected)
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




CREATE TABLE position (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary VARCHAR(30) NOT NULL,
  department VARCHAR(30) NOT NULL
);

  


  insert into position (title, salary, department) values('Manager', 200000, 1);
 insert into position(title, salary, department) values('Engineer', 220000,2 );
 insert into position(title, salary, department) values('Accountant', 240000, 3);
 insert into position(title, salary, department) values('Administration', 20000, 4);


CREATE TABLE department (
  id INTEGER PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);


insert into department(name)
values ('Management'),
       ('Engineering'),
       ('Accounting'),
       ('Marketing'),
       ('Human Resources');


SELECT * FROM employee;
SELECT * FROM role;

SELECT * FROM department;