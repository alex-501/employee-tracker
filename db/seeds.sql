INSERT INTO departments 
(id, name) --repeat algorithm

VALUES 
    (  1 , 'Supervisor'),
    ( 2 , 'HR'),
    ( 3 , 'accounting'),
    ( 4 , 'Mental Health');

INSERT INTO employeerole --order matters
(id, title, salary, department_id)

VALUES
    (  1, 'Supervisor ', 20000, 1),
    (  2, 'Assistant to the regional manager', 89900, 1  ),
    (  3, 'Assistant Regional Manager', 12000, 2  ),
    (  4, 'Office Pranks', 11000, 2  ),
     (  5, 'Computer dude', 22000, 3  ),
    (  6, 'Head doctor', 11000, 4  ),
    (  7, 'top head doctor', 50000, 4 );
    --peaky blinders eh
INSERT INTO  employees   
(id, first_name, last_name, role_id, manager_id)

VALUES
    ( 1,"mr", "jones", 7, NULL ),            
     ( 2, "tommy", "shelby", 1, 1 ),
    ( 3, "arthur", "shelby", 3, NULL ),   
    ( 4, "john", "shelby", 4, 3 ),
    ( 5, "polly", "gray", 2, NULL ),
    ( 6, "michael", "gray", 5, NULL ),
    ( 7, "mr ", "solomons", 6, 6 );

  

SELECT * FROM department;
SELECT * FROM employeerole;
SELECT * FROM employee;