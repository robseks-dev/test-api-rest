import { EmployeesModel } from "../models/employees.model.js";

export class EmployeesController {
  getEmployees = async (req, res) => {
    try {
      const employees = await EmployeesModel.getEmployees();
      res.json(employees);
    } catch (error) {
      return res.status(500).json({message: 'Something went wrong'});
    }
  }

  getEmployeeById = async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await EmployeesModel.getEmployeeById({ id });
  
      if (employee) return res.json(employee);
      res.status(404).json({ message: 'Employee not found.' });
    } catch (error) {
      return res.status(500).json({message: 'Something went wrong'});
    }
  }

  createEmployee = async (req, res) => {
    try {
      const employee = await EmployeesModel.createEmployee({ data: req.body });
      res.json(employee);
    } catch (error) {
      return res.status(500).json({message: 'Something went wrong'});
    }
  }

  updateEmployee = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await EmployeesModel.updateEmployee({ data: req.body, id });
      
      if (result.affectedRows > 0) return res.json({ message: 'Employee updated.' });
      res.status(404).json({ message: 'Employee not found.' });
    } catch (error) {
      return res.status(500).json({message: 'Something went wrong'});
    }
  }

  deleteEmployee = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await EmployeesModel.deleteEmployee({ id });
  
      if (result.affectedRows > 0) return res.json({ message: 'Employee deleted.' });
      res.status(404).json({ message: 'Employee not found.' });
    } catch (error) {
      return res.status(500).json({message: 'Something went wrong'});
    }
  }
}