DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;
USE employee_DB;


CREATE TABLE employee (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  Last_name VARCHAR(30) NOT NULL,
  Position_id INT NOT NULL,
 
    FOREIGN KEY (Position_id) REFERENCES employeePosition(id),
    REFERENCES employeePosition(id)
);


CREATE TABLE position (
  id INTEGER PRIMARY KEY,
  Position VARCHAR(30),
    salary DECIMAL(12,4),
    position_id INT NOT NULL,
    FOREIGN KEY (position_id) REFERENCES position(id)
);
  


SELECT * FROM employee;
SELECT * FROM position;

SELECT * FROM position;