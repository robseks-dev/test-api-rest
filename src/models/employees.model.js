import { connection } from "../database-config.js"

export class EmployeesModel {
  static getEmployees = async () => {
    try {
      const [employees] = await connection.query('SELECT * FROM employee');
      return employees;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static getEmployeeById = async ({ id }) => {
    try {
      const [employee] = await connection.query('SELECT * FROM employee WHERE id = ?', [id]);
      return employee[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static createEmployee = async ({ data }) => {
    try {
      const { name, salary } = data;
      const [rows] = await connection.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);
      return { id: rows.insertId, name, salary };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static updateEmployee = async ({ data, id }) => {
    try {
      const { name, salary } = data;
      const [result] = await connection.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static deleteEmployee = async ({ id }) => {
    try {
      const [result] = await connection.query('DELETE FROM employee WHERE id = ?', [id]);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}