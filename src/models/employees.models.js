import { pool } from "../db.js"


export const getAllEmployees = async () => {
    const [rows] = await pool.query('SELECT * FROM employee')
    return rows
}

export const getEmployeesById = async ( id ) => {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    if (rows.length <= 0) return false; 

    return rows[0];
};

export const createEmployee = async ( name, salary ) => {
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])

    return rows
};

export const deleteEmployeeById = async ( id ) => {

    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id])

        if (result.affectedRows <= 0) return false;

        

        return result;

}

export const updateEmployee = async ( name, salary, id ) => {
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])

        if (result.affectedRows === 0) return false;

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

        return rows[0]
}



