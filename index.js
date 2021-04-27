const mysql = require('mysql2');
const connection = require('./connection.js');

var requireStack = require('require-stack')
try{
  requireStack('./server.js')
}catch(e){
  console.log(e.stack)
}

class employee_db {
    constructor(connection) {
        this.connection = connection;
    }

    showDepartments() {
        return this.connection.promise().query(
            'SELECT id, name as department FROM departments'
        )
        .catch(err => {
            throw error;
        })
    }

    showemployeerole() {
        return this.connection.promise().query(
            'SELECT * FROM employeerole'
        )
        .catch(err => {
            throw error;
        })
    }

    showEmployees() {
        return this.connection.promise().query(
            'SELECT * FROM employees'
        )
        .catch(err => {
            throw error;
        })
    }

    addDepartment(department) {
        return this.connection.promise().query(
            'INSERT INTO departments SET ?',
            {
                name: department
      }  )
        .catch(err => {
            throw error;  })  }

    addRole(role, role_salary, departmentID) {
        return this.connection.promise().query(
            'INSERT INTO employeerole SET ?',
            {
                title: role,
                salary: role_salary,
                department_id: departmentID    }  )
        .catch(err => {
            throw error    })  }

    deleteDepartment(departmentID) {
        return this.connection.promise().query(
            'DELETE FROM departments WHERE ?',
            {
                id: departmentID
            }
        )
        .catch(err => {
            throw error; })}

    deleteRole(roleID) {
        return this.connection.promise().query(
            'DELETE FROM employeerole WHERE ?',
            {
                id: roleID
            }
        )
        .catch(err => {
            throw error;
        }) }


    addEmployee(firstName, lastName, roleID, managerID) {
        let manager_id;
        if (!(managerID === 0)) {
            manager_id = managerID
        }
        return this.connection.promise().query(
            'INSERT INTO employees SET ?',
            {
                first_name: firstName,
                last_name: lastName,
                role_id: roleID,
                manager_id: manager_id
            }  )
        .catch(err => {
            throw error;
        })}

    deleteEmployee(employeeID) {
        return this.connection.promise().query(
            'DELETE FROM employees WHERE ?',
            {
                id: employeeID })
        .catch(err => {
            throw error;  }) }

    updateEmployeeRole(employee_id, roleID) {
        return this.connection.promise().query(
            'UPDATE employees SET ? WHERE ?',
            [
                {
                    role_id: roleID },
                {  id: employee_id,  }  ])
        .catch(err => {
            throw error; }) }

   


}


module.exports = new employee_db(connection);