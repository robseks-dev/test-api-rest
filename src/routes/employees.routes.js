import { Router } from "express";
import { EmployeesController } from "../controllers/employees.controller.js";

const router = Router();
const employeesController = new EmployeesController();

router.get('/', employeesController.getEmployees);
router.get('/:id', employeesController.getEmployeeById);

router.post('/', employeesController.createEmployee);

router.patch('/:id', employeesController.updateEmployee);

router.delete('/:id', employeesController.deleteEmployee);

export default router;