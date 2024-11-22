import { connection } from "../database-config.js"

export class EmployeesModel {
  static getEmployees = async () => {
    try {
      const [employees] = await connection.query('SELECT * FROM employees');
      return employees;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static getEmployeeById = async ({ id }) => {
    try {
      const [employee] = await connection.query('SELECT * FROM employees WHERE id = ?', [id]);
      return employee[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static createEmployee = async ({ data }) => {
    try {
      const { id, name, email, salary } = data;
      await connection.query('INSERT INTO employees (id, name, email, salary) VALUES (?, ?, ?, ?)', [id, name, email, salary]);
      return { id, name, email, salary };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static updateEmployee = async ({ data, id }) => {
    try {
      const { name, email, salary } = data;
      const [result] = await connection.query('UPDATE employees SET name = IFNULL(?, name), email = IFNULL(?, email), salary = IFNULL(?, salary) WHERE id = ?', [name, email, salary, id]);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static deleteEmployee = async ({ id }) => {
    try {
      const [result] = await connection.query('DELETE FROM employees WHERE id = ?', [id]);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}