DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;
USE employee_DB;


CREATE TABLE employee (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  Last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES employeerole(id),
    FOREIGN KEY (manager_id) REFERENCES employeerole(id)
);


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
  ('Unica', 'Zurn', 3, 1);




CREATE TABLE position (
  id INTEGER PRIMARY KEY,
  Position VARCHAR(30),
    salary DECIMAL(12,4),
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);
  


  insert into position (position, salary, department_id) values('Manager', 200000, 1);
 insert into position(position, salary, department_id) values('Engineer', 220000,2 );
 insert into position(position, salary, department_id) values('Accountant', 240000, 3);
 insert into position(position, salary, department_id) values('Administration', 20000, 4);


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