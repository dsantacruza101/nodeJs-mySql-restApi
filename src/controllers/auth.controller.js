import { generateToken } from '../helper/jwt.js';
import { createUser, loginModel } from '../models/auth.models.js';




export const register = async (req, res) => {
    const { name, lastName, email, password } = req.body;
    try {
        console.log(name, lastName, email, password);
        const result = await createUser(name, lastName, email, password);
        res.send({
            id: result.insertId,
            name,
            lastName,
            email,
            password
        })
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log(email, password);

        const result = await loginModel(email)
        if (!result) return res.status(404).json({
            status: 404,
            msj: 'user/password incorrect'
        });
        console.log('RESULT', typeof (result.password));
        console.log('password de req.body', typeof (password));
        if (password === result.password) {
            const token = await generateToken(result.id, result.email);
            return res.status(200).json({
                status: 200,
                msj: 'user and password correct',
                user: {
                    token,
                    email: result.email,
                    name: result.name,
                    id: result.id
                }
            })
        } else {
            return res.status(404).json({
                status: 404,
                msj: 'user/password incorrect'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })
    }



}




