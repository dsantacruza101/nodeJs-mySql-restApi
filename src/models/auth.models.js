import { pool } from "../db.js"

export const createUser = async ( name, lastName, email, password) => {
    const [rows] = await pool.query('INSERT INTO usuarios (name, lastName, email, password) VALUES (?, ?, ?, ?)', [name, lastName, email, password])

    return rows
};

export const loginModel = async ( email ) => {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email])

    if( rows.length <= 0 ) return false;

    return rows[0]
}