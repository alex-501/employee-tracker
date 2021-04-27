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


let sql = 'INSERT INTO departments (id, name) VALUES (  1 , Supervisor),( 2 , HR),( 3 , accounting),( 4 , Mental Health);';
connection.query(sql,(err,result)=>{
if (err) throw err
console.log('database created');})

module.exports = connection;