import { Router } from 'express';
import { getEmployees, postEmployee, putEmployee, deleteEmployee, getEmployeebyId } from '../controllers/employees.controller.js';

const router = Router();

router.get('/employees', getEmployees);

router.get('/employee/:id', getEmployeebyId);

router.post('/employees', postEmployee);

router.patch('/employees/:id', putEmployee);

router.delete('/employees/:id', deleteEmployee);

export default router