DROP DATABASE IF EXISTS employee_db;
drop table if exists employeerole;

drop table if exists employees;
drop table if exists departments;




CREATE DATABASE employee_db;




USE employee_db;






CREATE TABLE departments (
   id INTEGER PRIMARY KEY,
    name VARCHAR(30) NOT NULL
  
);

CREATE TABLE employeerole (
    id INTEGER PRIMARY KEY,
    title varchar(30) ,
    salary decimal ,
    department_id INT,

        CONSTRAINT fk_department 
        FOREIGN KEY (department_id) 
        REFERENCES departments(id) 
        ON UPDATE CASCADE 
        
        ON DELETE SET NULL

);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    first_name varchar(30) ,
    last_name varchar(30) ,
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_manager
      FOREIGN KEY (manager_id)
    REFERENCES employees(id)

        ON UPDATE CASCADE
    ON DELETE SET NULL,
    CONSTRAINT fk_role 
        FOREIGN KEY (role_id) 
        REFERENCES employeerole(id)

        ON UPDATE CASCADE 


        ON DELETE SET NULL
);



SELECT * FROM department;
SELECT * FROM employeerole;
SELECT * FROM employee;