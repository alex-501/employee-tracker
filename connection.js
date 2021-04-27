const mysql = require('mysql2');

// connect/ create to db - remember password
const  connection = mysql.createConnection({
    host: 'localhost',
    port: `3306`,
    user: 'root',
    password: '$$Yumaaz1996$$',
    database: 'employee_db'
});
//how to connect db 


let sql = 'CREATE TABLE employees ( id INT(11) NOT NULL AUTO_INCREMENT, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(30) NOT NULL, role_id INT, manager_id INT, PRIMARY KEY (id),CONSTRAINT fk_manager  FOREIGN KEY (manager_id) REFERENCES employees(id) ON UPDATE CASCADE   ON DELETE SET NULL, CONSTRAINT fk_role  FOREIGN KEY (role_id)  REFERENCES roles(id) ON UPDATE CASCADE ON DELETE SET NULL);';
connection.query(sql,(err,result)=>{
if (err) throw err
console.log('database created');})

module.exports = connection;