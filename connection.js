const mysql = require('mysql2');

var requireStack = require('require-stack')
try{
  requireStack('./server.js')
}catch(e){
  console.log(e.stack)
}

// connect/ create to db - remember password
const  connection = mysql.createConnection({
    host: 'localhost',
    port: `3306`,
    user: 'root',
    password: '$$Yumaaz1996$$',
    database: 'employee_db'
});
//how to connect db 


let sql = 'INSERT INTO  employees (id, first_name, last_name, role_id, manager_id) VALUES ( 1,"mr", "jones", 7, NULL ),              ( 2, "tommy", "shelby", 1, 1 ),  ( 3, "arthur", "shelby", 3, NULL ),    ( 4, "john", "shelby", 4, 3 ), ( 5, "polly", "gray", 2, NULL ),( 6, "michael", "gray", 5, NULL ), ( 7, "mr ", "solomons", 6, 6 );';
connection.query(sql,(err,result)=>{
if (err) throw err
console.log('database created');})

module.exports = connection;