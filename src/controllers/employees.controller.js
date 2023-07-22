import { pool } from '../db.js'
import { getAllEmployees, getEmployeesById, createEmployee, deleteEmployeeById, updateEmployee } from '../models/employees.models.js'

export const getEmployees = async (req, res) => {
    try {
        const result = await getAllEmployees()
        res.json(result)
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })
    }
};

export const getEmployeebyId = async (req, res) => {
    try {
        const result = await getEmployeesById(req.params.id)

        if ( !result ) return res.status(404).json({
            message: 'employee not found'
        });

        res.send(result)
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        });
    }
};

export const postEmployee = async (req, res) => {
    const { name, salary } = req.body
    try {
        
        const result = await createEmployee( name, salary )
        res.send({
            id: result.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        });
    }

};

export const deleteEmployee = async (req, res) => {
    try {
        
        const result = await deleteEmployeeById(req.params.id)

        if ( !result ) return res.status(404).json({
            message: 'Employee not found'
        });

        console.log(result);
        return res.status(200).json({
            message: `Employee with id ${req.params.id} was succesfully deleted.`
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'something goes wrong'
        });
    }

};

export const putEmployee = async (req, res) => {
    const { id } = req.params
    const { name, salary } = req.body

    try {
        
        const result = await updateEmployee( name, salary, id )

        if ( !result ) return res.status(404).json({
            message: 'employee not found'
        })

        res.json(result)
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        });
    }

};
